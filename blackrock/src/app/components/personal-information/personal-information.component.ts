import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  Sex: any = ['Mujer', 'Hombre']
  ages: any = ['De 18 a 25', '26 a 30', '31 a 35', '36 a 40', '41 a 55', '56 a 64', '65 o más']
  education: any = ['Educación básica', 'Educación media superior', 'Técnico superior', 'Licenciatura', 'Posgrado']
  userinfo = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    sex: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    ocupation: new FormControl('', [ Validators.minLength(2)]),
    cp: new FormControl('',[Validators.pattern(/^[0-9]\d*$/)]),
    didAcceptInfo: new FormControl(false),
    didAcceptTerms: new FormControl(false),
  });  

  constructor(private APIservice: FakeAPIService, public router: Router) { }
 

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userinfo.controls;
  }
  onFormSubmit() {
    if (this.userinfo.valid) {
      console.log(this.userinfo.value);
    } else {
      return;
    }
    /* this.APIservice.updateUserData(id, this.userinfo.value).subscribe((users) => {
      console.log(users);
    this.router.navigate (['profile'])
  })  */   
  }
}
