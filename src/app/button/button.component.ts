import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  isButtonError: boolean = false;
  textColor: string = 'red';

  clickMe() {
    this.isButtonError = !this.isButtonError;
    this.textColor = this.isButtonError ? 'red' : 'green';
  }
}
