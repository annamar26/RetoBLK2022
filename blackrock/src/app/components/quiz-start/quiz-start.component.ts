import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
  
  userquiz = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  constructor() { }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.userquiz.controls;
  }
}
