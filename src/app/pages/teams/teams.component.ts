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
      name: 'Herren 1. Liga',
      category: 'Herren',
      description: 'Unsere erste Herrenmannschaft spielt in der 1. Liga und kämpft um den Aufstieg.',
      coach: 'Thomas Müller',
      image: 'https://images.pexels.com/photos/163526/field-hockey-player-girls-game-163526.jpeg?auto=compress&cs=tinysrgb&w=800',
      players: [
        { number: 1, name: 'Daniel Schmidt', position: 'Torwart' },
        { number: 5, name: 'Marco Weber', position: 'Verteidigung' },
        { number: 7, name: 'Stefan Meier', position: 'Verteidigung' },
        { number: 10, name: 'Michael Fischer', position: 'Mittelfeld' },
        { number: 12, name: 'Andreas Bauer', position: 'Mittelfeld' },
        { number: 15, name: 'Christian Wagner', position: 'Angriff' },
        { number: 18, name: 'Tobias Hoffmann', position: 'Angriff' },
        { number: 20, name: 'Patrick Schneider', position: 'Angriff' }
      ]
    },
  ];

  selectedTeam: Team | null = null;

  selectTeam(team: Team) {
    this.selectedTeam = this.selectedTeam?.id === team.id ? null : team;
  }
}
