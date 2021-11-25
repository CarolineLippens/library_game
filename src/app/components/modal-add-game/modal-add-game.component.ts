import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'modal-add-game',
  templateUrl: './modal-add-game.component.html',
  styleUrls: ['./modal-add-game.component.less']
})
export class ModalAddGameComponent {
  platform: any = {};
  addGameForm = this.formBuilder.group({
    name: '',
    picture: '',
    platform: ['', Validators.required],
    gotIt: false
  })

    constructor(private formBuilder: FormBuilder) {}

    onSubmit(): void {
      console.log(this.addGameForm.value);
    }
}
