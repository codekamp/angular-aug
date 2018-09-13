import {NotFoundComponent} from './not-found/not-found.component';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {Routes} from '@angular/router';
import {VideosComponent} from './videos/videos.component';
import {EmailsComponent} from './emails/emails.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const myMaping: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: '', component: DashboardComponent, children: [
    {path: 'videos', component: VideosComponent},
    {path: 'emails', component: EmailsComponent},
  ]
  },
  {path: '**', component: NotFoundComponent}
];
