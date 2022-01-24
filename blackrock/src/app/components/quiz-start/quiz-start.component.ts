import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
  
  @Output() userName = new EventEmitter<object>()
 userquiz= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

 user: any

  constructor(private Router: Router) { }

  ngOnInit(){
 
 
    sessionStorage.clear()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userquiz.controls;
  }

  startQuiz(){

    this.userName.emit(this.userquiz.value.name)
    console.log(this.userquiz.value.name)
    sessionStorage.setItem('Nombre', this.userquiz.value.name)
    this.Router.navigate(['quiz'])
  
  }
}
