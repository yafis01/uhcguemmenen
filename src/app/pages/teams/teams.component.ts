import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  number: number;
  name: string;
  position: string;
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
      name: 'Herren 1',
      category: 'Herren',
      description: 'Unsere erste Herrenmannschaft ist aktuell noch nicht im aktiven Spielbetrieb beteiligt.',
      coach: 'Jan Affolter',
      image: 'assets/teams/team1.jpg',
      isRosterVisible: true,
      players: [
        { number: 1, name: 'Joel', position: 'Torwart' },
        { number: 5, name: 'Lars', position: 'Verteidigung' },
        { number: 11, name: 'Yann', position: 'Verteidigung' },
        { number: 12, name: 'Noel', position: 'Verteidigung' },
        { number: 9, name: 'Maurice', position: 'Verteidigung' },
        { number: 7, name: 'Jan', position: 'Verteidigung' },
        { number: 23, name: 'Dario', position: 'Angriff' },
        { number: 15, name: 'Cédric', position: 'Angriff' },
        { number: 18, name: 'Anis', position: 'Angriff' },
        { number: 8, name: 'Linus', position: 'Angriff' },
        { number: 10, name: 'Yanis', position: 'Angriff' }
      ]
    },
  ];

  toggleRoster(team: Team) {
    team.isRosterVisible = !team.isRosterVisible;
  }
}
