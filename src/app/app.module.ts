import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RatingComponent} from './rating/rating.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {API_URL, LoginService, XYZ_SOMETHING} from './services/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {myMaping} from './routes';
import { VideosComponent } from './videos/videos.component';
import { EmailsComponent } from './emails/emails.component';
import { HeaderComponent } from './header/header.component';
import {InvidzService} from './services/invidz.service';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    SliderComponent,
    LoginPageComponent,
    SignupPageComponent,
    NotFoundComponent,
    DashboardComponent,
    VideosComponent,
    EmailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myMaping)
  ],
  providers: [
    LoginService,
    InvidzService,
    {provide: API_URL, useValue: 'http://hello.com'},
    {provide: XYZ_SOMETHING, useValue: 'some random value'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
