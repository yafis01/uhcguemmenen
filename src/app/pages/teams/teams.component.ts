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
    {
      id: 2,
      name: 'Damen',
      category: 'Damen',
      description: 'Unser Damenteam besteht aus talentierten Spielerinnen mit viel Leidenschaft.',
      coach: 'Sandra Keller',
      image: 'https://images.pexels.com/photos/8007461/pexels-photo-8007461.jpeg?auto=compress&cs=tinysrgb&w=800',
      players: [
        { number: 1, name: 'Laura Zimmermann', position: 'Torwart' },
        { number: 4, name: 'Anna Koch', position: 'Verteidigung' },
        { number: 6, name: 'Julia Richter', position: 'Verteidigung' },
        { number: 9, name: 'Sarah Klein', position: 'Mittelfeld' },
        { number: 11, name: 'Lisa Wolf', position: 'Mittelfeld' },
        { number: 13, name: 'Nina Schröder', position: 'Angriff' },
        { number: 17, name: 'Emma Neumann', position: 'Angriff' }
      ]
    },
    {
      id: 3,
      name: 'U16 Junioren',
      category: 'Junioren',
      description: 'Unsere U16 ist die Zukunft des Clubs mit großem Entwicklungspotenzial.',
      coach: 'Martin Huber',
      image: 'https://images.pexels.com/photos/46798/the-ball-stadion-horn-corner-46798.jpeg?auto=compress&cs=tinysrgb&w=800',
      players: [
        { number: 1, name: 'Leon Braun', position: 'Torwart' },
        { number: 3, name: 'Felix Hartmann', position: 'Verteidigung' },
        { number: 8, name: 'Tim Lang', position: 'Mittelfeld' },
        { number: 11, name: 'Noah Schmitt', position: 'Mittelfeld' },
        { number: 14, name: 'Lukas Schulz', position: 'Angriff' },
        { number: 19, name: 'Moritz Zimmermann', position: 'Angriff' }
      ]
    },
    {
      id: 4,
      name: 'U12 Junioren',
      category: 'Junioren',
      description: 'Die jüngsten Talente lernen hier die Grundlagen des Floorball-Sports.',
      coach: 'Peter Vogel',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      players: [
        { number: 1, name: 'Max Becker', position: 'Torwart' },
        { number: 2, name: 'Paul Lehmann', position: 'Verteidigung' },
        { number: 5, name: 'Jonas Krause', position: 'Mittelfeld' },
        { number: 7, name: 'Ben Müller', position: 'Mittelfeld' },
        { number: 9, name: 'Finn Werner', position: 'Angriff' }
      ]
    }
  ];

  selectedTeam: Team | null = null;

  selectTeam(team: Team) {
    this.selectedTeam = this.selectedTeam?.id === team.id ? null : team;
  }
}
