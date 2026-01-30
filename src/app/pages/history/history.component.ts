import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Milestone {
  year: string;
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
      year: '03.09.2025',
      title: 'Vereinsgründung',
      description: 'Am 3. September 2025 wurde der Verein unter dem Namen "Unihockey Gümmenen " in Rosshäusern von drei Gründungsmitglieder gegründet.',
      image: '../../../assets/history/gruendung.PNG',
      type: 'foundation'
    },
   {
    year: '05.09.2025',
    title: 'Pokalsieg am Seedorf Cup',
    description: 'Ein historischer Moment - wir gewinnen das Unihockey-Grümpelturnier in Seedorf am 5. September 2025.',
    image: '../../../assets/history/seedorf.jpg',
    type: 'achievement'
   },
    {
      year: '07.10.2025',
      title: 'Erstes offizielles Training',
      description: 'Am 7. Oktober 2025 hat das erste Training in unserem neuen Spiellokal in Allenlüften stattgefunden.',
      image: '../../../assets/history/erstes_training.png',
      type: 'development'
    },
    {
      year: '24.10.2025',
      title: 'Generalversammlung',
      description: 'Am 24. Oktober 2025 fand die erste Generalversammlung statt im Gasthof Sternen Detligen.',
      image: '../../../assets/history/gv.jpg',
      type: 'foundation'
    },
    {
      year: '13.12.2025',
      title: 'Namensumbenennung',
      description: 'Der Verein wird von "Unihockey Gümmenen" zu "Gümmenen Sport-Club" umbenannt, um die vielseitige und polysportive Ausrichtung zu reflektieren.',
      type: 'development'
    },
    {
      year: '25.04.2026',
      title: 'Erstes eigenes Unihockey-Grümpelturnier',
      description: 'Am 25. April 2026 organisiert der Gümmenen Sport-Club sein erstes eigenes Unihockey-Grümpelturnier in der Sport- und Freizeithalle Allenlüften.',
      image: '../../../assets/events/turnier.png',
      type: 'achievement'
    }
  ];

  achievements = [
    { title: 'Grümpelturniersiege', count: 1 },
    { title: 'Getrunkene Biere', count: 523 },
    { title: 'Aktive Mitglieder', count: 15 }
  ];
}
