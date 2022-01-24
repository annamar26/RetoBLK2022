import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss']
})
export class FifthQuestionComponent implements OnInit {
  @Input() userName: string='';
  resultarray = [sessionStorage.getItem("Score1"), sessionStorage.getItem("Score2"), sessionStorage.getItem("Score3"), sessionStorage.getItem("Score4")]
	scoremap = this.resultarray.map((x) => parseInt(x!))
	score = this.scoremap.reduce((a, b) => a + b) 
  

  user: any

 isVisited = false;

  constructor() { }

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
    console.log(this.scoremap)
		console.log(this.score)

  }
  

  checkVisited(event: any) {
    const valor = event.target
     console.log(valor.value)
     valor.style.filter= "grayscale(0%)";
     valor.style.transform= "scale(1.1)";
     sessionStorage.setItem('goal', valor.value)
     
  }

  
}
