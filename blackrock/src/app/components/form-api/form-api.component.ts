import { Component, OnInit } from '@angular/core';
import { FakeAPIService } from '../../services/fake-api.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-api',
  templateUrl: './form-api.component.html',
  styleUrls: ['./form-api.component.scss']
})
export class FormApiComponent implements OnInit {
  hide = true;
  
  user = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(public APIservice: FakeAPIService) { }  
  
  ngOnInit() {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.user.controls;
  }

  register(){
    this.APIservice.register(this.user.value).subscribe((users) => {
      console.log(users);
    });

  }

    
}


