export const myMaping: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component:  SignupPageComponent},
  {path: 'dashboard', component:  DashboardComponent},
  {path: '**', component: NotFoundComponent}
];
