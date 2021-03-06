import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  duration: number = 2000;
  selectedGender: string = '';
  selectedAge: string = '';
  selectedEducation: string = '';
  name: any;
  gender: any;
  age: any;
  education: any;
  ocupation: any;
  cp: any;
  viewGender: any;
  viewAge: any;
  viewEducation: any;
  userinfoedit = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    gender: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    ocupation: new FormControl('', [Validators.minLength(2)]),
    cp: new FormControl('', [Validators.pattern(/^[0-9]\d*$/)]),
    didAcceptInfo: new FormControl(false),
    didAcceptTerms: new FormControl(false),
  });

  genderOptions: any = ['Prefiero no responder', 'Mujer', 'Hombre'];
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

  constructor(
    private userData: FirebaseService,
    private apiservice: FakeAPIService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUserData();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userinfoedit.controls;
  }
  getUserData() {
    this.userData.getUser().subscribe((user: any) => {
      this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
        this.name = response[0].name;
        this.gender = response[0].gender;
        this.age = response[0].age;
        this.education = response[0].education;
        this.ocupation = response[0].workfield;
        this.cp = response[0].cp;
      });
    });
  }

  updateInfo() {
    this.userData.getUser().subscribe((user: any) => {
      this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
        this.apiservice
          .updateUserData(response[0].id, {
            name:
              this.userinfoedit.value.name === ''
                ? this.name
                : this.userinfoedit.value.name,
            email: user.email,
            cp: this.userinfoedit.value.cp === 0 ? this.cp : this.userinfoedit.value.cp,
            education:
              this.userinfoedit.value.education === ''
                ? this.education
                : this.userinfoedit.value.education,
            age:
              this.userinfoedit.value.age === ''
                ? this.age
                : this.userinfoedit.value.age,
            gender:
              this.userinfoedit.value.gender === ''
                ? this.gender
                : this.userinfoedit.value.gender,
            workfield:
              this.userinfoedit.value.ocupation === ''
                ? this.ocupation
                : this.userinfoedit.value.ocupation,

            level: response[0].level,
            doneCourses: response[0].doneCourses,
            goal: response[0].goal,
          })
          .subscribe(() => {            
            this.editopenSnackBar('Datos actualizados');
            this.router.navigate(['profile']);
          });
      });
    });
  }

  showGender(e: any) {
    this.gender = e;
  }
  showAge(e: any) {
    this.age = e;
  }
  showEducation(e: any) {
    this.education = e;
  }
  editopenSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,
    });
  }
}
