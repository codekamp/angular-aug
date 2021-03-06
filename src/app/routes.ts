import {NotFoundComponent} from './components/not-found/not-found.component';
import {SignupPageComponent} from './components/signup-page/signup-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {Routes} from '@angular/router';
import {VideosComponent} from './components/videos/videos.component';
import {EmailsComponent} from './components/emails/emails.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';
import {AnonGuard} from './guards/anon.guard';

export const myMaping: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent, canActivate: [AnonGuard]},
  {path: 'signup', component: SignupPageComponent, canActivate: [AnonGuard]},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: 'videos', component: VideosComponent},
    {path: 'emails', component: EmailsComponent},
  ]
  },
  {path: '**', component: NotFoundComponent}
];
