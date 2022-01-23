import { ValueConverter } from '@angular/compiler/src/render3/view/template';
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
  

  checkVisited(event: any) {
    const valor = event.target
     console.log(valor.value)
     valor.style.filter= "grayscale(0%)";
     valor.style.transform= "scale(1.1)";
     sessionStorage.setItem('goal', valor.value)
  }

  
}
