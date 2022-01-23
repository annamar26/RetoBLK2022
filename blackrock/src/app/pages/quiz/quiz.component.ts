import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
	name = ''
	level: any
	resultarray = [sessionStorage.getItem("Score1"), sessionStorage.getItem("Score2"), sessionStorage.getItem("Score3"), sessionStorage.getItem("Score4")]
	scoremap = this.resultarray.map((x) => parseInt(x!))
	score = ((this.scoremap.reduce((a, b) => a + b)));
	points = 0
	firstFormGroup!: FormGroup;
	secondFormGroup!: FormGroup;
	thirdFormGroup!: FormGroup;
	fourthFormGroup!: FormGroup;
	fifthFormGroup!: FormGroup;
	constructor(private Router: Router) { }

	ngOnInit(){
		console.log(this.scoremap)
		console.log(this.score)
		this.points = parseInt(this.score.toString())

  	}
	pullname(e: any) {
		this.name = e;
		console.log(e)
	}
	punctuation() {

		if (this.points >=0 && this.points < 7) {
			this.level = "Iniciado Jedi"
		}
		 else if (this.points>= 8 && this.points<= 10) {
			this.level = "Padawan Jedi"
		}
		else  if (this.points>= 11 && this.points<= 13) {
			this.level = "Caballero Jedi"
		}
		 else if (this.points>= 14 && this.points<= 16) {
			this.level = "Maestro Jedi"
		}
		else if (this.points>= 17){
			this.level = 'Maestro Yoda'
		} 

		console.log(this.points)
		return this.level
	}

	levelStorage() {
		console.log(this.punctuation());

		this.level = this.punctuation();
		sessionStorage.setItem("level", this.punctuation())
		sessionStorage.getItem("level")
		console.log(sessionStorage.getItem("level"))
		if(sessionStorage.getItem("level" )){
			this.Router.navigate(["results"])
				}
	}
	
}
