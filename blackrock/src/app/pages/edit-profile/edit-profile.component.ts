import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  selectedGender: string ="";
  
  genders: any[] = [
    { value: 'Mujer', viewValue: 'Mujer' },
    { value: 'Hombre', viewValue: 'Hombre' },
    { value: 'Prefiero no decir', viewValue: 'Prefiero no decir' }
  ]
  
  constructor() { }
  
  ngOnInit(): void {
  } 
  

}
