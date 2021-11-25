import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.less']
})
export class GameCardComponent {
  @Input() game: any = '';

  ngOnInit() {
    console.log(this.game);
  }
}
