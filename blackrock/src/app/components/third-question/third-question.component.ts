import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
})
export class ThirdQuestionComponent implements OnInit {
  questions: FormGroup;

  constructor(fb: FormBuilder) {
    this.questions = fb.group({
      '1-true': false,
      '1-false': false,
      '2-true': false,
      '2-false': false,
      '3-true': false,
      '3-false': false,
      '4-true': false,
      '4-false': false,
    });
  }

  ngOnInit(): void {}
  	
	playAudio(){
		const audio = new Audio();
		audio.src = "../../../assets/draganddrop_sound.mp3";
		audio.load();
    audio.play();
	}
  toggleSelection() {
 this.playAudio()
    console.log(this.questions.value);
  }
}
