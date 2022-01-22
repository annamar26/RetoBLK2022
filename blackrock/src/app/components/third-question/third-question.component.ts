import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
})
export class ThirdQuestionComponent implements OnInit {
  @Input() userName: string='';
  questions: FormGroup;

  user: any
  points = 0 as any
  disabled = false
  checked = false
  
  constructor(fb: FormBuilder) {
    this.questions = fb.group({
      'onetrue': false,
      'onefalse': false,
      'twotrue': false,
      'twofalse': false,
      'threetrue': false,
      'threefalse': false,
      'fourtrue': false,
      'fourfalse': false,
    });
  }

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
    
  }
  	
	playAudio(){
		const audio = new Audio();
		audio.src = "../../../assets/draganddrop_sound.mp3";
		audio.load();
    audio.play();
	}

  toggleSelection() {
    let str2 = 0

  this.playAudio()
    console.log(this.questions.value);
    
    if(this.questions.value.onetrue == true && this.questions.value.onefalse == false){
      str2 ++
    } if(this.questions.value.twotrue == true && this.questions.value.twofalse == false){
      str2 ++
    } if(this.questions.value.threefalse == true && this.questions.value.threetrue== false){
      str2 ++
    } if(this.questions.value.fourtrue == true && this.questions.value.fourfalse == false){
      str2 ++
    } if(this.questions.value.onetrue == true && this.questions.value.onefalse == true && str2 >= 1){
      str2 --
    } if(this.questions.value.twotrue == true && this.questions.value.twofalse == true && str2 >= 1){
      str2 --
    } if(this.questions.value.threetrue == true && this.questions.value.threfalse == true && str2 >= 1){
      str2 --
    } if(this.questions.value.fourtrue == true && this.questions.value.fourfalse == true && str2 >= 1){
      str2 --
    }

  // let str = this.points.toString()
  this.points = str2
  sessionStorage.setItem("Score3", this.points)
  sessionStorage.getItem("Score3")
  console.log(sessionStorage.getItem("Score3"))
  console.log(str2)
}
}
