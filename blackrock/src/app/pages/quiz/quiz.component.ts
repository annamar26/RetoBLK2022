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
	firstFormGroup!: FormGroup;
	secondFormGroup!: FormGroup;
	thirdFormGroup!: FormGroup;
	fourthFormGroup!: FormGroup;
	fifthFormGroup!: FormGroup;
	constructor(private Router: Router) { }

	ngOnInit(): void{
	  	}
	pullname(e: any) {
		this.name = e;
		console.log(e)
	}
	
	
}
