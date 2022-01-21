import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss']
})
export class FifthQuestionComponent implements OnInit {
  @Input() userName: string='';

  user: any

 isVisited = false;

  constructor() { }

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
  }
  
  checkVisited() {
     this.isVisited = !this.isVisited;
  }
  
}
