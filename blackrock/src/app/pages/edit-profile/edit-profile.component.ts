import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  selectedGender: string ="";
  selectedAge: string ="";
  selectedEducation: string ="";
  name: any
  gender: any
  age: any
  education:any
  ocupation:any
  cp:any
  viewGender: any
  viewAge: any
  viewEducation: any
  userinfo= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    gender: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    ocupation: new FormControl('', [Validators.minLength(2)]),
    cp: new FormControl('', [Validators.pattern(/^[0-9]\d*$/)]),
    didAcceptInfo: new FormControl(false),
    didAcceptTerms: new FormControl(false),
  })
  
  genderOptions: any = [ 'Prefiero no responder', 'Mujer', 'Hombre'];
  agesOptions: any = [
    'Prefiero no responder',
    'De 18 a 25',
    '26 a 30',
    '31 a 35',
    '36 a 40',
    '41 a 55',
    '56 a 64',
    '65 o más',
  ];
  educationOptions: any = [
    'Prefiero no responder',
    'Educación básica',
    'Educación media superior',
    'Técnico superior',
    'Licenciatura',
    'Posgrado',
  ];
  
  constructor(private userData: FirebaseService, private apiservice: FakeAPIService, private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit(){
    this.getUserData()
    
  } 

  get f(): { [key: string]: AbstractControl } {
    return this.userinfo.controls;
  }
  getUserData(){
    this.userData.getUser().subscribe((user: any) => {
      console.log(user.email);
      this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
       this.name =(response[0].name);
       this.gender =(response[0].gender)
       this.age = (response[0].age)
       this.education= (response[0].education)
       this.ocupation = (response[0].workfield)
       this.cp = response[0].cp
       
      // this.userinfo.setValue({
      //     age: this.age,
      //     gender: this.gender,
      //     education: this.education
      //    })
       
  })})}

  updateInfo(){
    
      console.log(this.userinfo.value);
      this.userData.getUser().subscribe((user: any) => {
        console.log(user.email);
        this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
          console.log(response);
          this.apiservice
            .updateUserData(response[0].id, {'name': this.userinfo.value.name === "" ? this.name : this.userinfo.value.name, 
            'cp': this.userinfo.value.cp === 0 ? this.cp : this.userinfo.value.cp,
            'email': user.email,
            'education': this.userinfo.value.education === "" ? this.education : this.userinfo.value.education,
            'age': this.userinfo.value.age === "" ? this.age : this.userinfo.value.age,
            'gender': this.userinfo.value.gender === "" ? this.gender : this.userinfo.value.gender,
            'workfield': this.userinfo.value.ocupation === "" ? this.ocupation : this.userinfo.value.ocupation,
            })
            .subscribe((data) => {
              console.log(data);
              alert("Datos actualizados")
            });
        });
      });
    
  }

  showGender(e:any){
    this.gender = e
  }
  showAge(e:any){
    this.age = e
  }
  showEducation(e:any){
    this.education = e
  }
}
