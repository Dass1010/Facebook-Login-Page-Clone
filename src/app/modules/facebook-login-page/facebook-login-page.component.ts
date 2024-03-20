import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facebook-login-page',
  templateUrl: './facebook-login-page.component.html',
  styleUrls: ['./facebook-login-page.component.scss'],
})
export class FacebookLoginPageComponent {
  checkBoxForm = new FormGroup({
    name1: new FormControl('', Validators.required),
  });

  find() {
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    console.log(this.checkBoxForm);
    console.log(this.checkBoxForm.valid);
  }
}
