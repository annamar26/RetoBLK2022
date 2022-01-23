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
	score = (this.scoremap.reduce((a, b) => a + b));
	firstFormGroup!: FormGroup;
	secondFormGroup!: FormGroup;
	thirdFormGroup!: FormGroup;
	fourthFormGroup!: FormGroup;
	fifthFormGroup!: FormGroup;
	constructor(private Router: Router) { }

	ngOnInit(): void {
		sessionStorage.clear()
		console.log(this.scoremap)
		console.log(this.score)

  	}
	pullname(e: any) {
		this.name = e;
		console.log(e)
	}
	punctuation() {
	
		if (this.score >=0 && this.score < 7) {
			this.level = "Iniciado Jedi"
		}
		else if (this.score >= 8 && this.score <= 10) {
			this.level = "Padawan Jedi"
		}
		else if (this.score >= 11 && this.score <= 13) {
			this.level = "Caballero Jedi"
		}
		else if (this.score >= 14 && this.score <= 16) {
			this.level = "Maestro Jedi"
		}
		else if (this.score >= 17){
			this.level = 'Maestro Yoda'
		} else {
			this.level = 'Iniciado Jedi'
		}

		console.log(this.score)
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
