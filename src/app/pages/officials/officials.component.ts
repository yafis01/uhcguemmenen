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
      image: 'assets/default/default-profile.png',
      description: 'Leitet den Verein mit Engagement und sorgt für eine erfolgreiche strategische Ausrichtung.',
      zitat: 'Make Gümmenen Sport-Club  great again.'
    },
    {
      id: 2,
      name: 'Anis Fenni',
      role: 'Vize-Präsident',
      category: 'board',
      email: '-',
      image: 'assets/default/default-profile.png',
      description: 'Unterstützt den Präsidenten und übernimmt Führungsaufgaben in dessen Abwesenheit.',
      zitat: 'Teamwork makes the dream work.'
    },
    {
      id: 3,
      name: 'Jan Affolter',
      role: 'Sportchef',
      category: 'board',
      email: '-',
      phone: '-',
      image: 'assets/default/default-profile.png',
      description: 'Organisiert Training und Turniere für alle Teams.',
      zitat: 'My favorite game is the one that starts on time.'
    },
    {
      id: 4,
      name: 'Lars Lüthi',
      role: 'Finanzen',
      category: 'board',
      email: '-',
      image: 'assets/default/default-profile.png',
      description: 'Verantwortlich für die finanzielle Planung und eine nachhaltige Vereinsführung.',
      zitat: 'Sorry, I ain\'t got no money, I\'m not trying to be funny.'
    },
    {
      id: 5,
      name: 'Yanis Fischer',
      role: 'Sekretariat & Webseite',
      category: 'board',
      email: '-',
      image: 'assets/default/default-profile.png',
      description: 'Kümmert sich um Kommunikation, Administration und Mitgliederanliegen.',
      zitat: 'Back office for success.'
    },
    {
      id: 6,
      name: 'Linus Gäumann',
      role: 'Social Media Manager',
      category: 'board',
      email: '-',
      image: 'assets/default/default-profile.png',
      description: 'Verantwortlich für die Social-Media-Präsenz und digitale Kommunikation des Vereins.',
      zitat: 'Content is king, but engagement is queen.'
    }
  ];

  functionaries: Official[] = [
    {
      id: 5,
      name: 'Cédric Müller',
      role: 'Funktionär',
      category: 'staff',
      email: '-',
      image: 'assets/default/default-profile.png',
      description: 'Unterstützt den Verein mit flexiblen Einsätzen je nach Bedarf und Situation – von der Organisation bis zur Betreuung bei Anlässen.',
      zitat: 'In heaven there is no beer, that\'s why we drink it here.'
    },
    {
      id: 6,
      name: 'Yann Hunkeler',
      role: 'Funktionär',
      category: 'staff',
      email: '-',
      image: 'assets/default/default-profile.png',
      description: 'Trägt mit vielseitigen Aufgaben zum Vereinsleben bei – immer da, wo Unterstützung gebraucht wird.',
      zitat: 'Save water, drink beer.'
    }
  ];
}
