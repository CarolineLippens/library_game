import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { GameCardComponent } from './components/game-card/game-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalAddGameComponent } from './components/modal-add-game/modal-add-game.component';

//pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    
    //pages
    HomeComponent,

    //components
    GameCardComponent,
    NavbarComponent,
    ModalAddGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
