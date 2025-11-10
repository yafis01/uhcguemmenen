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
  zitat: string;
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
      description: 'Leitet den Verein mit Engagement und sorgt für eine erfolgreiche strategische Ausrichtung.',
      zitat: 'Make UHC Gümmenen great again.'
    },
    {
      id: 2,
      name: 'Jan Affolter',
      role: 'Spielbetrieb',
      category: 'board',
      email: '-',
      phone: '-',
      image: '../../../assets/default-profile.png',
      description: 'Organisiert Training, Spiele und Turniere für alle Teams.',
      zitat: ''
    },
    {
      id: 3,
      name: 'Lars Lüthi',
      role: 'Finanzen',
      category: 'board',
      email: '-',
      image: '../../../assets/default-profile.png',
      description: 'Verantwortlich für die finanzielle Planung und eine nachhaltige Vereinsführung.',
      zitat: 'Sorry, I ain\'t got no money, I\'m not trying to be funny.'
    },
    {
      id: 4,
      name: 'Yanis Fischer',
      role: 'Sekretariat & Webseite',
      category: 'board',
      email: '-',
      image: '../../../assets/default-profile.png',
      description: 'Kümmert sich um Kommunikation, Administration und Mitgliederanliegen.',
      zitat: 'Back office for success.'
    },
    {
      id: 4,
      name: 'Cédric Müller',
      role: 'Buvette',
      category: 'board',
      email: '-',
      image: '../../../assets/officials/mueller.jpg',
      description: 'Sorgt mit Getränken (Bier) und Snacks für das leibliche Wohl bei unseren Spielen und Anlässen.',
      zitat: 'In heaven there is no beer, that\'s why we drink it here.'
    },
    {
      id: 4,
      name: 'Yann Hunkeler',
      role: 'Küchenhilfe',
      category: 'board',
      email: '-',
      image: '../../../assets/default-profile.png',
      description: 'Unterstützt den Buvetten-Chef bei der Vorbereitung und Ausgabe von Snacks und Getränken während Spiele und Veranstaltungen.',
      zitat: 'In heaven there is no beer, that\'s why we drink it here.'
    }
  ];
}
