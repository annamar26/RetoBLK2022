import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  hide = true;
  
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private signupfirebase: FirebaseService) { }  
  
  ngOnInit() {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  register(){
    this.signupfirebase.singIn(this.user.value.mail, this.user.value.password)
      .then((userCredentials)=>{
        alert("Registro exitoso.")
        console.log(userCredentials)
      })
      .catch((error)=>alert(error.message))
  }

    
}
