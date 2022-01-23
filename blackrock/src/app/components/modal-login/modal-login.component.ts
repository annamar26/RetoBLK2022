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

  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private firebase: FirebaseService, private router: Router
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
        this.router.navigate(['profile'])

      })
      .catch((error) => console.log(error.message));
  }
  google(){
    this.firebase.loginGoogle()
    .then((userCredential: any) => {
      console.log('inicio de sesión correcto', userCredential);
      this.router.navigate(['profile'])
    })
    .catch((error) => console.log(error.message));
  }
}
