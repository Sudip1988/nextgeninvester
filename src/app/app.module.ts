import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { NavbarComponent } from './Components/NavItems/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports:      [ BrowserModule, 
                   RouterModule.forRoot(appRoutes),
                  FormsModule ],
  declarations: [ AppComponent, HomeComponent, NavbarComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
