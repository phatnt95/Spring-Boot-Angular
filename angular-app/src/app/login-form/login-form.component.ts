import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('')
  });
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  async submitForm() {
    // this.authService.authenticate(this.profileForm.value.username, this.profileForm.value.password).subscribe(res => {
    //   debugger

    // });
  }

}
