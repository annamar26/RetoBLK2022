import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  name=''
 
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  fifthFormGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  
  // fwdMsgToSib2($event: any) { this.currentMsgFromChild1ToChild2 = $event; }
  pullname(e: any){
this.name = e;
console.log(e)
  }

}
