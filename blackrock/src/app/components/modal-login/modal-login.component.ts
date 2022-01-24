import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent implements OnInit {
  hide = true;
  errormessage: string ='';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 2000
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private firebase: FirebaseService, private router: Router, private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  logIn() {
    this.firebase
      .logIn(this.user.value.mail, this.user.value.password)

      .then((userCredential: any) => {
        console.log('inicio de sesión correcto', userCredential);
        this.loginopenSnackBar('Hola de nuevo');        

      })
      .catch((error) => {console.log(error.message);
      this.errormessage= error.message
      this.loginopenSnackBar(error.message)
    });
  }
  google(){
    this.firebase.loginGoogle()
    .then((userCredential: any) => {
      console.log('inicio de sesión correcto', userCredential);
      this.loginopenSnackBar('Hola de nuevo');
      this.router.navigate(['profile'])
    })
    .catch((error) => {console.log(error.message);
      this.errormessage= error.message
      this.loginopenSnackBar(error.message)
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
