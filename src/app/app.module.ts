import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { HomeComponent } from '../components/home/home.component';

// Material
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
