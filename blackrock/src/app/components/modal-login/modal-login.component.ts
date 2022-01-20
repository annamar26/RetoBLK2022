import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import Cookies from "universal-cookie"

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
  hide = true;
  
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private APIservice: FakeAPIService) { }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

   logIn(){
   
  this.APIservice.getUsersData()
   
    .subscribe((users: any)=> {
      const userEmails =users.filter((userData: any)=> userData.email=== this.user.value.email);
      console.log(userEmails)
      const userLogged = userEmails.filter((emails: any)=> emails.password=== this.user.value.password)
console.log(userLogged)
  })

}}
