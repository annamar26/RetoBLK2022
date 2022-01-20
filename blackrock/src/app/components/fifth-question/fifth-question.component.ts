import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss']
})
export class FifthQuestionComponent implements OnInit {

  
 isVisited = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  checkVisited() {
     this.isVisited = !this.isVisited;
  }
  
}
