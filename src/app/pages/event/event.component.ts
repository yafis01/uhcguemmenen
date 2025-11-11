import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class EventComponent implements OnInit {
  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;
  form!: FormGroup;
  isSubmitting = false;

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
      Telefon: ['', [Validators.required]],
      Bemerkung: ['']
    });
  }

  onSubmit(): void {
    const nativeForm = this.formRef?.nativeElement;

    if (nativeForm && !nativeForm.checkValidity()) {
      nativeForm.reportValidity();
      return;
    }

    const hCaptchaResponse = (nativeForm.querySelector('textarea[name="h-captcha-response"]') as HTMLTextAreaElement)?.value;
    if (!hCaptchaResponse) {
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();
    formData.append('access_key', '505ceddb-c2be-477d-8445-c76acc6e8c0b');
    formData.append('h-captcha-response', hCaptchaResponse);
    Object.entries(this.form.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    this.http.post('https://api.web3forms.com/submit', formData).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.form.reset();
          setTimeout(() => this.router.navigate(['/success']), 500);
        } else {
        console.error('Fehler beim Senden');
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
