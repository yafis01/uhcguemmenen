import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  news: NewsItem[] = [
    {
      id: 1,
      title: 'Grümpelturnier 25. April 2026',
      date: '25.04.2026',
      summary: 'Am 25. April 2026 findet das erste Unihockey-Grümpelturnier des Gümmenen Sport-Club statt. Sei dabei!',
      image: '../../../assets/00_GSC/grumpu_logo.PNG',
      link: '/events'
    }
  ];
}
