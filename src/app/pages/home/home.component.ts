import { Component } from '@angular/core';
import * as games from '../../../assets/games.json';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  displayModal: boolean = false;
  gamesList:any = games.list;

  constructor() { }

  ngOnInit() {  
    console.log('gamelist', this.gamesList);
    for(let i = 0; i < this.gamesList.length; i++) {
      console.log(this.gamesList[i]);
    }
  }

  openModal(): any {
    this.displayModal = true;
  }
}
