import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isButtonError: boolean = false;
  textColor: string = 'btn-primary';

  clickMe() {
    this.isButtonError = !this.isButtonError;
    this.textColor = this.isButtonError ? 'btn-danger' : 'btn-primary';
  }
}
