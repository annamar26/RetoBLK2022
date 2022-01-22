import { Component, Input, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {
  @Input() userName: any;
  playAudio(){
		const audio = new Audio();
		audio.src = "../../../assets/draganddrop_sound.mp3";
		audio.load();
    audio.play();
	}
 
  user: any
  result=[] as any
  points1 = 0 as any

  constructor() { }

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
  }

  options = new Set(['Acciones', 'Bonos', 'Derivados', 'Opciones', 'EFT\'s', 'Fondo de inversión', 'Commodity', 'Moneda/Tipo de Cambio', 'Cetes', 'Crypto']);

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    console.log(chip.value)
    this.playAudio(); 
    
    
    if(!this.result.includes(chip.value)){
      
      this.result.push(chip.value)   
    }
    else {
      const exist = this.result.indexOf(chip.value)
      if(exist){
        this.result.splice(exist,1)
      } 
    }

    let resultLength =this.result.length
     switch (resultLength) {
       case 1||2 : {this.points1=1}        
         break;
       case 3||4 : {this.points1=2}        
         break;
       case 5||6 : {this.points1=3}        
         break;
       case 7||8 : {this.points1=4}        
         break;
       case 9||10 : {this.points1=5}        
         break;
     }
      this.settingStorage()
    }
    
    settingStorage(){
      const str = this.points1.toString()
      sessionStorage.setItem("Score1", str)
      console.log(this.result)
      console.log(typeof str)
      console.log(sessionStorage.getItem("Score1"))

    }
}
