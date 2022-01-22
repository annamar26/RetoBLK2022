import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide= true
	level: any
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private APIservice: FakeAPIService,
    private firebase: FirebaseService, public router: Router) { }

  ngOnInit() {
		this.level = sessionStorage.getItem("level")
  }
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  register() {
    this.firebase
      .singIn(this.user.value.mail, this.user.value.password)

      .then((userCredential: any) => {
        console.log('registro correcto', userCredential);
        this.APIservice.register({...this.user.value, level: this.level}).then((users) => {
          console.log(users);
     this.router.navigate (['courses'])
        });
      })
      .catch((error) => console.log(error.message));
  }
  google(){
    this.firebase.loginGoogle()
    .then((userCredential: any) => {
      console.log('inicio de sesión correcto', userCredential);
      this.APIservice.register({
  name: userCredential.user._delegate.displayName, email: userCredential.user._delegate.email,
  level: this.level
})
      .then((users) => {
      console.log(users);
  this.router.navigate (['courses'])
      })
    })
    .catch((error) => console.log(error.message));
  }
}
