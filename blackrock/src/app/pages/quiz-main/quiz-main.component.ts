import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.scss']
})
export class QuizMainComponent implements OnInit {
name=""
  constructor() { }

  ngOnInit(): void {
  }

  pullname(e: any){
    this.name = e;
    console.log(e)
      }
    
}
