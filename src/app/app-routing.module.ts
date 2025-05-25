import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdvertisersComponent } from './pages/advertisers/advertisers.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/contact/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'advertiser', component: AdvertisersComponent},
  {path: 'publisher', component: PublishersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'secret-secure', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
