import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  number: number;
  name: string;
  position: string;
}

interface Team {
  id: number;
  name: string;
  category: string;
  description: string;
  coach: string;
  players: Player[];
  image: string;
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
      image: 'https://images.pexels.com/photos/163526/field-hockey-player-girls-game-163526.jpeg?auto=compress&cs=tinysrgb&w=800',
      players: [
        { number: 1, name: 'Joel', position: 'Torwart' },
        { number: 7, name: 'Lars', position: 'Verteidigung' },
        { number: 10, name: 'Yann', position: 'Verteidigung' },
        { number: 12, name: 'Noel', position: 'Verteidigung' },
        { number: 9, name: 'Maurice', position: 'Verteidigung' },
        { number: 15, name: 'Cédric', position: 'Angriff' },
        { number: 18, name: 'Anis', position: 'Angriff' },
        { number: 5, name: 'Jan', position: 'Verteidigung' },
        { number: 20, name: 'Yanis', position: 'Angriff' }
      ]
    },
  ];

  selectedTeam: Team | null = null;

  selectTeam(team: Team) {
    this.selectedTeam = this.selectedTeam?.id === team.id ? null : team;
  }
}
