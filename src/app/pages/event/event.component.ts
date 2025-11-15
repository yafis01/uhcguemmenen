import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgHcaptchaModule, CAPTCHA_CONFIG } from 'ng-hcaptcha';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Teamname: ['', Validators.required],
      Kontaktperson: ['', Validators.required],
      EMail: ['', [Validators.required, Validators.email]],
      Telefon: ['', Validators.required],
      Bemerkung: [''],
      captcha: [null, Validators.required]
    });
  }

  onSubmit(): void {
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

      this.http.post('https://api.web3forms.com/submit', formData, {
          headers: { 'Content-Type': 'application/json' }
      }).subscribe({
          next: (response: any) => {
              if (response.success) {
                  this.form.reset();
                  setTimeout(() => this.router.navigate(['/success']), 500);
              } else {
                  console.error('Fehler beim Senden', response);
              }
          },
          error: (err) => {
              console.error('Fehler beim Senden:', err);
          },
          complete: () => {
              this.isSubmitting = false;
          }
      });
  }
}
