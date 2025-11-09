import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  news = [
    {
      id: 1,
      title: 'Grümputurnier 21. März 2026',
      date: '21.03.2026',
      summary: 'Am 21. März 2026 findet das erste Grümputurnier des UHC Gümmenen statt. Sei dabei!',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/events'
    }
  ];

  upcomingMatches = [
    {
      id: 1,
      date: '2025-11-02',
      time: '18:00',
      home: 'FC Floorball',
      away: 'HC Bern',
      location: 'Sporthalle Zentrum'
    }
  ];
}
