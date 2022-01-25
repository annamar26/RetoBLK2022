import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 2000;
  level: any;
  valorModal = true;
  name: any;
  doneCourses: any;
  goal: any;
  email: any;
  password: any;
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
    private _snackBar: MatSnackBar,
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
        this.router.navigate(['profile']);
        this.loginopenSnackBar('Hola de nuevo');
      })
      .catch((error) => {
        this.loginopenSnackBar(error.message);
      });
  }
  google() {
    this.firebase
      .loginGoogle()
      .then((userCredential: any) => {
        this.router.navigate(['profile']);
        this.loginopenSnackBar('Hola de nuevo');
      })
      .catch((error) => {
        this.loginopenSnackBar(error.message);
      });
  }
  register() {
    this.firebase
      .singIn(this.user.value.mail, this.user.value.password)

      .then((userCredential: any) => {
        this.APIservice.register({
          name: this.name,
          email: this.user.value.mail,
          cp: 0,
          education: '',
          age: 0,
          gender: '',
          workfield: '',
          level: this.level,
          doneCourses: this.doneCourses,
          goal: this.goal,
        }).subscribe((users) => {
          this.router.navigate(['courses']);
          this.loginopenSnackBar('Registro exitoso');
        });
      })
      .catch((error) => {
        this.loginopenSnackBar(error.message);
      });
  }
  google2() {
    this.firebase
      .loginGoogle()
      .then((userCredential: any) => {
        this.APIservice.register({
          name: userCredential.user._delegate.displayName,
          email: userCredential.user._delegate.email,
          cp: 0,
          education: '',
          age: 0,
          gender: '',
          workfield: '',
          level: this.level,
          doneCourses: this.doneCourses,
          goal: this.goal,
        }).subscribe((users) => {
          this.loginopenSnackBar('Registro exitoso');
          this.router.navigate(['courses']);
        });
      })
      .catch((error) => {
        this.loginopenSnackBar(error.message);
      });
  }

  loginopenSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,
    });
  }
}
