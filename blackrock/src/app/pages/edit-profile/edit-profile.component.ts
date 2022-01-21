import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  selectedGender: string ="";
  selectedAge: string ="";
  selectedEducation: string ="";
  
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
  
  constructor() { }
  
  ngOnInit(): void {
  } 
  

}
