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
  goal: any
  name: any
  doneCourses: any
  user = new FormGroup({
      password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private APIservice: FakeAPIService,
    private firebase: FirebaseService, public router: Router) { }

  ngOnInit() {
		this.level = sessionStorage.getItem("level")
    this.goal = sessionStorage.getItem("goal")
    this.name = sessionStorage.getItem('Nombre')
    this.doneCourses = sessionStorage.getItem('doneCourses')

  }
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  register() {
    this.firebase
      .singIn(this.user.value.mail, this.user.value.password)

      .then((userCredential: any) => {
        console.log('registro correcto', userCredential);
        this.APIservice.register({email: this.user.value.email, name: this.name, level: this.level, doneCourses: this.doneCourses, goal: this.goal}).subscribe((users) => {
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
  level: this.level, doneCourses: this.doneCourses, goal: this.goal
})
      .subscribe((users) => {
      console.log(users);
  this.router.navigate (['courses'])
      })
    })
    .catch((error) => console.log(error.message));
  }
}
