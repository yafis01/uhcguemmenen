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
      title: 'Saisonstart 2025/26',
      date: '2025-10-15',
      summary: 'Die neue Saison beginnt mit einem spannenden Auftaktspiel gegen FC Zürich.',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Erfolgreiche Jugendarbeit',
      date: '2025-10-10',
      summary: 'Unsere U16-Mannschaft gewinnt den regionalen Pokal.',
      image: 'https://images.pexels.com/photos/46798/the-ball-stadion-horn-corner-46798.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Neuer Trainerstab vorgestellt',
      date: '2025-10-05',
      summary: 'Mit frischen Ideen und viel Erfahrung startet unser neues Trainerteam.',
      image: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800'
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
    },
    {
      id: 2,
      date: '2025-11-09',
      time: '20:00',
      home: 'FC Basel',
      away: 'FC Floorball',
      location: 'Arena Basel'
    },
    {
      id: 3,
      date: '2025-11-16',
      time: '19:00',
      home: 'FC Floorball',
      away: 'Zürich United',
      location: 'Sporthalle Zentrum'
    }
  ];
}
