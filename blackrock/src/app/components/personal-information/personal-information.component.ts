import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  nameQuiz: any;
  Sex: any = ['Mujer', 'Hombre'];
  ages: any = [
    'De 18 a 25',
    '26 a 30',
    '31 a 35',
    '36 a 40',
    '41 a 55',
    '56 a 64',
    '65 o más',
  ];
  education: any = [
    'Educación básica',
    'Educación media superior',
    'Técnico superior',
    'Licenciatura',
    'Posgrado',
  ];
  userinfo = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    gender: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    workfield: new FormControl('', [Validators.minLength(2)]),
    cp: new FormControl('', [Validators.pattern(/^[0-9]\d*$/)]),
    didAcceptInfo: new FormControl(false),
    didAcceptTerms: new FormControl(false),
  });

  constructor(
    private apiService: FakeAPIService,
    public router: Router,
    private userData: FirebaseService
  ) {}

  ngOnInit() {
    const nameStorage = sessionStorage.getItem('Nombre');
    this.nameQuiz = nameStorage;
    this.userinfo.get('name')?.setValue(this.nameQuiz);
  }

  get k(): { [key: string]: AbstractControl } {
    return this.userinfo.controls;
  }
  onFormSubmit() {
    if (this.userinfo.valid) {
      console.log(this.userinfo.value);
      this.userData.getUser().subscribe((user: any) => {
        console.log(user.email);
        this.apiService.getEmailUser(user.email).subscribe((response: any) => {
          console.log(response);
          this.apiService
            .updateUserData(response[0].id, this.userinfo.value)
            .subscribe((data) => {
              console.log(data);
              this.router.navigate(['profile']);
            });
        });
      });
    } else {
      return;
    }
  
  }

  inputName() {}
}
