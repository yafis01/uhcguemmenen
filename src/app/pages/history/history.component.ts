import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Milestone {
  year: number;
  title: string;
  description: string;
  image?: string;
  type: 'foundation' | 'achievement' | 'development';
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  milestones: Milestone[] = [
    {
      year: 1995,
      title: 'Vereinsgründung',
      description: 'Eine Gruppe begeisterter Floorball-Enthusiasten gründet den FC Floorball mit nur 12 Mitgliedern.',
      image: 'https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'foundation'
    },
    {
      year: 1998,
      title: 'Erster Meistertitel',
      description: 'Nach nur drei Jahren gewinnt unsere erste Mannschaft die regionale Meisterschaft.',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'achievement'
    },
    {
      year: 2002,
      title: 'Aufstieg in die 1. Liga',
      description: 'Ein historischer Moment - unser Team steigt in die höchste Liga auf.',
      type: 'achievement'
    },
    {
      year: 2005,
      title: 'Gründung der Jugendabteilung',
      description: 'Start der systematischen Nachwuchsförderung mit der ersten U12-Mannschaft.',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'development'
    },
    {
      year: 2008,
      title: 'Pokalgewinn',
      description: 'Der erste große Pokalsieg auf nationaler Ebene.',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'achievement'
    },
    {
      year: 2012,
      title: 'Neue Sporthalle',
      description: 'Einweihung unserer eigenen Trainingshalle mit modernster Ausstattung.',
      type: 'development'
    },
    {
      year: 2015,
      title: 'Gründung Damenteam',
      description: 'Unser erstes Damenteam nimmt am Ligabetrieb teil.',
      image: 'https://images.pexels.com/photos/8007461/pexels-photo-8007461.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'development'
    },
    {
      year: 2018,
      title: 'Jugendfördererpreis',
      description: 'Auszeichnung für herausragende Jugendarbeit auf nationaler Ebene.',
      type: 'achievement'
    },
    {
      year: 2020,
      title: '25 Jahre FC Floorball',
      description: 'Jubiläumsfeier mit über 300 Mitgliedern und Alumni.',
      type: 'foundation'
    },
    {
      year: 2023,
      title: 'Vizemeister',
      description: 'Unsere beste Platzierung in der 1. Liga mit dem zweiten Platz.',
      image: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'achievement'
    }
  ];

  achievements = [
    { title: 'Meistertitel', count: 8 },
    { title: 'Pokalsiege', count: 5 },
    { title: 'Jugendtitel', count: 12 },
    { title: 'Aktive Mitglieder', count: 250 }
  ];
}
