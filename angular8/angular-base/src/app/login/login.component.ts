import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModal } from '../types/UserModal';
import { SessionService } from '../service/session.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private userService: SessionService;
  private loginForm: FormGroup;
  private formBuilder: FormBuilder;

  constructor(userService: SessionService, formBuilder: FormBuilder) {
    this.userService = userService;
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get loginFormField() {
    console.log('this.loginForm.controls', this.loginForm);
    return this.loginForm.controls;
  }

  async loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    const {userName, password} = this.loginForm.value;
    let userInfo = new UserModal(userName, password);
    let loggedInUser = await this.userService.authorizeUser(userInfo);
    console.log('logg', loggedInUser);
  }
}