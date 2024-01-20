import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'tour', component: TourPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: MainPageComponent },
];
