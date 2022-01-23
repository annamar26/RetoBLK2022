import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
  userinfo = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    sex: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    ocupation: new FormControl('', [Validators.minLength(2)]),
    cp: new FormControl('', [Validators.pattern(/^[0-9]\d*$/)]),
    didAcceptInfo: new FormControl(false),
    didAcceptTerms: new FormControl(false),
  });
  genders: any[] = [
    { value: 'Prefiero no responder', viewValue: 'Prefiero no responder' },
    { value: 'Mujer', viewValue: 'Mujer' },
    { value: 'Hombre', viewValue: 'Hombre' },
  ];

  ages: any[] = [
    { value: 'Prefiero no responder', viewValue: 'Prefiero no responder' },
    { value: 'De 18 a 25', viewValue: 'De 18 a 25' },
    { value: '26 a 30', viewValue: '26 a 30' },
    { value: '31 a 35', viewValue: '31 a 35' },
    { value: '36 a 40', viewValue: '36 a 40' },
    { value: '41 a 55', viewValue: '41 a 55' },
    { value: '56 a 64', viewValue: '56 a 64' },
    { value: '65 o más', viewValue: '65 o más' }, 
  ];

  educations: any = [
    { value: 'Prefiero no responder', viewValue: 'Prefiero no responder' },
    { value: 'Educación básica', viewValue: 'Educación básica' },
    { value: 'Educación media superior', viewValue: 'Educación media superior' },
    { value: 'Técnico superior', viewValue: 'Técnico superior' },
    { value: 'Licenciatura', viewValue: 'Licenciatura' },
    { value: 'Posgrado', viewValue: 'Posgrado' },
    ]
  
  constructor(private userData: FirebaseService, private apiservice: FakeAPIService) { }
  
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
       this.education= (response[0].eduation)
       this.ocupation = (response[0].workfield)
       this.cp = response[0].cp
  })})}
}
