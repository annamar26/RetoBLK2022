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
     const cookies = new Cookies
    
  this.APIservice.getUserData(this.user.value.mail, this.user.value.password)
  
    .subscribe(
      
      (users: any)=> {
      if(users.length>0){
         console.log(users)
  
      cookies.set("id", users[0].id, {path:'/'});
      cookies.set("name", users[0].name, {path:'/'});
      cookies.set("email", users[0].email, {path:'/'});
      console.log(cookies.get("email"))
      }else{
        alert('Verifique sus credenciales')
      }
     
            
      
      }, 
      (error=> {
        alert("Ocurrió un error con el servidor, intente nuevamente");
        console.log(error)}))
      
    
  

}}
