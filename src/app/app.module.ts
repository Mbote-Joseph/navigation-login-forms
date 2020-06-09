import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { TemplatesComponent } from './templates/templates.component';
import { SocialsComponent } from './socials/socials.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavBarComponent,
    TemplatesComponent,
    SocialsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
