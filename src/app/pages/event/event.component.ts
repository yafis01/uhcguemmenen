import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgHcaptchaModule, CAPTCHA_CONFIG } from 'ng-hcaptcha';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, NgHcaptchaModule],
   providers: [
      {
        provide: CAPTCHA_CONFIG,
        useValue: { siteKey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2', languageCode: 'de' }
      }
    ]
})
export class EventComponent implements OnInit {
  isSubmitting = false;
   @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;
   form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Teamname: ['', Validators.required],
      Kontaktperson: ['', Validators.required],
      EMail: ['', [Validators.required, Validators.email]],
      Telefon: ['', Validators.required],
      LizenzSpieler: [0, [Validators.required, Validators.min(0), Validators.max(3)]],
      Bemerkung: [''],
      captcha: [null, Validators.required]
    });
  }

  scrollToAnmeldung() {
    const element = document.getElementById('anmeldung');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onSubmit() {
  const nativeForm = this.formRef?.nativeElement;
    if (nativeForm && !nativeForm.checkValidity()) {
      nativeForm.reportValidity();
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();
    formData.append('access_key', '505ceddb-c2be-477d-8445-c76acc6e8c0b');
    formData.append('h-captcha-response', this.form.value.captcha);
    Object.entries(this.form.value).forEach(([key, value]) => {
      if (key !== 'captcha') formData.append(key, value as string);
    });

      this.http.post('https://api.web3forms.com/submit', formData).subscribe({
          next: (response: any) => {
              if (response.success) {
                  this.form.reset();
                  this.toastr.success('Anmeldung erfolgreich', 'Success');
                  setTimeout(() => this.router.navigate(['/success']), 500);
              } else {
                  this.toastr.error(
                      'Fehler bei der Anmeldung. Bitte melde dich manuell per Mail an: gummenensportclub@gmail.com',
                      'Error',
                      { timeOut: 0, extendedTimeOut: 0, closeButton: true, tapToDismiss: false }
                  );
                  console.error('Fehler beim Senden', response);
              }
          },
          error: (err) => {
              this.toastr.error(
                  'Fehler beim Senden! Bitte melde dich manuell per Mail an: gummenensportclub@gmail.com',
                  'Error',
                  { timeOut: 0, extendedTimeOut: 0, closeButton: true, tapToDismiss: false }
              );
              console.error('Fehler beim Senden:', err);
          },
          complete: () => {
              this.isSubmitting = false;
          }
      });
  }
}
