import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Official {
  id: number;
  name: string;
  role: string;
  category: 'board' | 'coaches' | 'staff';
  email: string;
  phone?: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-officials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officials.component.html',
  styleUrl: './officials.component.css'
})
export class OfficialsComponent {
  boardMembers: Official[] = [
    {
      id: 1,
      name: 'Cédric Jüni',
      role: 'Präsident',
      category: 'board',
      email: '-',
      phone: '-',
      image: '../../../assets/default-profile.png',
      description: 'Leitet den Verein seit 2015 mit großem Engagement und strategischer Weitsicht.'
    },
    {
      id: 2,
      name: 'Jan Affolter',
      role: 'Spielbetrieb',
      category: 'board',
      email: '-',
      phone: '-',
      image: '../../../assets/default-profile.png',
      description: 'Verantwortlich für Öffentlichkeitsarbeit und Sponsoring.'
    },
    {
      id: 3,
      name: 'Lars Lüthi',
      role: 'Finanzen',
      category: 'board',
      email: '-',
      image: '../../../assets/default-profile.png',
      description: 'Verwaltet die Vereinsfinanzen mit Präzision und Transparenz.'
    },
    {
      id: 4,
      name: 'Yanis Fischer',
      role: 'Sekretariat',
      category: 'board',
      email: '-',
      image: '../../../assets/default-profile.png',
      description: 'Zuständig für Protokolle und administrative Angelegenheiten.'
    },
    {
      id: 4,
      name: 'Cédric Müller',
      role: 'Buvette',
      category: 'board',
      email: '-',
      image: '../../../assets/default-profile.png',
      description: 'Zuständig für Protokolle und administrative Angelegenheiten.'
    }
  ];
}
