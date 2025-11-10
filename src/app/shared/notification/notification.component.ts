import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
    constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/events']);
  }
}
