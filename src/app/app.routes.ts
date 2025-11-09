import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/event/event.component').then(m => m.EventComponent)
  },
  {
    path: 'teams',
    loadComponent: () => import('./pages/teams/teams.component').then(m => m.TeamsComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.component').then(m => m.HistoryComponent)
  },
  {
    path: 'officials',
    loadComponent: () => import('./pages/officials/officials.component').then(m => m.OfficialsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
