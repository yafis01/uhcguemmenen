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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

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

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const jsonData = this.form.value;
    this.http.post('https://formspree.io/f/mldarkaq', jsonData, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: () => {
        this.form.reset();
        setTimeout(() => this.router.navigate(['/success']), 500);
      },
      error: (err) => {
        console.error('Fehler beim Senden:', err);
      }
    });
  }
}
