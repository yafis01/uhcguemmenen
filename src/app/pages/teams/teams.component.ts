import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  number: number;
  name: string;
  image?: string;
}

interface Team {
  id: number;
  name: string;
  category: string;
  description: string;
  coach: string;
  players: Player[];
  image: string;
  isRosterVisible?: boolean;
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams: Team[] = [
    {
      id: 1,
      name: 'Aktive',
      category: 'Polysportives Training',
      description: 'Wir treffen uns regelmässig zum Training.',
      coach: 'Jan Affolter',
      image: 'assets/teams/team1.jpg',
      isRosterVisible: true,
      players: [
        { number: 1, name: 'Joel' },
        { number: 5, name: 'Lars L.' },
        { number: 10, name: 'Yann' },
        { number: 12, name: 'Noel' },
        { number: 7, name: 'Maurice' },
        { number: 8, name: 'Jan A.' },
        { number: 23, name: 'Dario' },
        { number: 9, name: 'Cédric J.' },
        { number: 99, name: 'Anis' },
        { number: 4, name: 'Linus' },
        { number: 14, name: 'Yanis' },
        { number: 55, name: 'Cédric M.' },
        { number: 43, name: 'Jan' },
        { number: 8, name: 'Lars' },

      ]
    },
  ];

  toggleRoster(team: Team) {
    team.isRosterVisible = !team.isRosterVisible;
  }
}
