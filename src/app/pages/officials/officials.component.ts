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
      name: 'Robert Steiner',
      role: 'Präsident',
      category: 'board',
      email: 'r.steiner@fc-floorball.ch',
      phone: '+41 79 123 45 67',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leitet den Verein seit 2015 mit großem Engagement und strategischer Weitsicht.'
    },
    {
      id: 2,
      name: 'Andrea Meyer',
      role: 'Vizepräsidentin',
      category: 'board',
      email: 'a.meyer@fc-floorball.ch',
      phone: '+41 79 234 56 78',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Verantwortlich für Öffentlichkeitsarbeit und Sponsoring.'
    },
    {
      id: 3,
      name: 'Michael Schulz',
      role: 'Kassier',
      category: 'board',
      email: 'm.schulz@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Verwaltet die Vereinsfinanzen mit Präzision und Transparenz.'
    },
    {
      id: 4,
      name: 'Sarah Weber',
      role: 'Aktuarin',
      category: 'board',
      email: 's.weber@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Zuständig für Protokolle und administrative Angelegenheiten.'
    }
  ];

  coaches: Official[] = [
    {
      id: 5,
      name: 'Thomas Müller',
      role: 'Cheftrainer Herren',
      category: 'coaches',
      email: 't.mueller@fc-floorball.ch',
      phone: '+41 79 345 67 89',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Erfahrener Trainer mit über 15 Jahren Coaching-Erfahrung auf höchstem Niveau.'
    },
    {
      id: 6,
      name: 'Sandra Keller',
      role: 'Trainerin Damen',
      category: 'coaches',
      email: 's.keller@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Ehemalige Nationalspielerin mit Leidenschaft für die Entwicklung des Damen-Floorball.'
    },
    {
      id: 7,
      name: 'Martin Huber',
      role: 'Jugendtrainer U16',
      category: 'coaches',
      email: 'm.huber@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spezialist für Talentförderung und Jugendentwicklung.'
    },
    {
      id: 8,
      name: 'Peter Vogel',
      role: 'Jugendtrainer U12',
      category: 'coaches',
      email: 'p.vogel@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Bringt den Jüngsten mit viel Geduld die Freude am Floorball bei.'
    }
  ];

  staff: Official[] = [
    {
      id: 9,
      name: 'Lisa Hoffmann',
      role: 'Sportkoordinatorin',
      category: 'staff',
      email: 'l.hoffmann@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Koordiniert Trainingszeiten und organisiert Turniere.'
    },
    {
      id: 10,
      name: 'Daniel Roth',
      role: 'Materialwart',
      category: 'staff',
      email: 'd.roth@fc-floorball.ch',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sorgt für optimale Ausrüstung und Hallenpflege.'
    }
  ];
}
