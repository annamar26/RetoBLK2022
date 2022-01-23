import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  name=''
	level: any
 resultarray=[sessionStorage.getItem("Score1"), sessionStorage.getItem("Score2"), sessionStorage.getItem("Score3"), sessionStorage.getItem("Score4")]
scoremap = this.resultarray.map((x) => parseInt(x!))
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  constructor(private Router : Router) { }

  ngOnInit(): void {
  }

  // fwdMsgToSib2($event: any) { this.currentMsgFromChild1ToChild2 = $event; }
  pullname(e: any){
this.name = e;
console.log(e)
  }
	punctuation(){
				const score = (this.scoremap.reduce((a, b) => a + b));
			if(score <= 7){
				this.level = "Iniciado Jedi"
			}
			else if (score >= 8 ){
				this.level = "Padawan Jedi"
			}
			else if(score <= 10){
				this.level = "Padawan Jedi"
			}
			else if(score > 11){
				this.level = "Caballero Jedi"
			}

			else if(score <= 13){
				this.level = "Caballero Jedi"
			}
			else if(score >= 14){
				this.level = "Maestro Jedi"
			}
			else if(score <= 16){
				this.level = "Maestro Jedi"
			}
			else if(score >= 17){
				this.level = "Maestro Yoda"
			}
			else if(score == 11)
				{this.level = "Caballero Jedi"

			}
					console.log(score)
			return this.level
	}
	levelStorage(){
		this.level = this.punctuation();
		sessionStorage.setItem("level", this.punctuation())
		this.Router.navigate(["results"])
	}
}
