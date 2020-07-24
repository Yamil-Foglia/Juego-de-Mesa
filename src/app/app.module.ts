import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCreateComponent } from './components/views/player-create/player-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { ButtonComponent } from './components/views/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCreateComponent,
    HomeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
