import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TrainersComponent } from './pages/trainers/trainers.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { MediaComponent } from './pages/media/media.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback für unbekannte Routen
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking' // wichtig für Angular Universal / SSR
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
