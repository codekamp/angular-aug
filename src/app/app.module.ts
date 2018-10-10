import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RatingComponent} from './components/rating/rating.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {API_URL, LoginService, XYZ_SOMETHING} from './services/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {myMaping} from './routes';
import { VideosComponent } from './components/videos/videos.component';
import { EmailsComponent } from './components/emails/emails.component';
import { HeaderComponent } from './components/header/header.component';
import {InvidzService} from './services/invidz.service';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {rootReducer} from './reducers/index';
import {VideoManager} from './managers/video.manager';
import {AuthGuard} from './guards/auth.guard';

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
    MatProgressSpinnerModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myMaping),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    LoginService,
    InvidzService,
    VideoManager,
    AuthGuard,
    {provide: API_URL, useValue: 'http://hello.com'},
    {provide: XYZ_SOMETHING, useValue: 'some random value'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
