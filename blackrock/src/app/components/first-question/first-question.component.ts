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

  constructor() { }

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
  }

  options = new Set(['Acciones', 'Bonos', 'Derivados', 'Opciones', 'EFT\'s', 'Fondo de inversión', 'Commodity', 'Moneda/Tipo de Cambio', 'Cetes', 'Crypto']);

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    console.log(chip.value)
    this.playAudio();

 }
}
