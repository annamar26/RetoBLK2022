import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  hide = true;
  level: any;
  valorModal = true;
  name: any;
  doneCourses: any;
  goal: any;
  email: any
  password: any
  user = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private APIservice: FakeAPIService
  ) {}

  ngOnInit() {
    this.valorModal =
      sessionStorage.getItem('valorModal') === 'true' ? true : false;
    this.level = sessionStorage.getItem('level');
    this.doneCourses = sessionStorage.getItem('doneCourses');
    this.goal = sessionStorage.getItem('goal');
    this.name = sessionStorage.getItem('Nombre');
  }
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  logIn() {
    this.firebase
      .logIn(this.user.value.mail, this.user.value.password)

      .then((userCredential: any) => {
        console.log('inicio de sesión correcto', userCredential);
        this.router.navigate(['profile']);
      })
      .catch((error) => console.log(error.message));
  }
  google() {
    this.firebase
      .loginGoogle()
      .then((userCredential: any) => {
        console.log('inicio de sesión correcto', userCredential);
        this.router.navigate(['profile']);
      })
      .catch((error) => console.log(error.message));
  }
  register() {
    this.firebase
      .singIn(this.user.value.mail, this.user.value.password)

      .then((userCredential: any) => {
        console.log('registro correcto', userCredential);
       
            this.APIservice.register({email: this.user.value.mail, name: this.name, level: this.level, doneCourses: this.doneCourses, goal: this.goal}).subscribe((users) => {
              console.log(users);
         this.router.navigate (['courses'])
            });
      })
      .catch((error) => console.log(error.message));
  }
  google2() {
    this.firebase
      .loginGoogle()
      .then((userCredential: any) => {
        console.log('inicio de sesión correcto', userCredential);
        this.APIservice.register({
          name: userCredential.user._delegate.displayName,
          email: userCredential.user._delegate.email,
          level: this.level,
          doneCourses: this.doneCourses,
          goal: this.goal,
        }).subscribe((users) => {
          console.log(users);
          this.router.navigate(['courses']);
        });
      })
      .catch((error) => console.log(error.message));
  }
}
