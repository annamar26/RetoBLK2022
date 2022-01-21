import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourthquestion',
  templateUrl: './fourthquestion.component.html',
  styleUrls: ['./fourthquestion.component.scss']
})
export class FourthquestionComponent implements OnInit  {
  @Input() userName: string='';
	playAudio(){
		const audio = new Audio();
		audio.src = "../../../assets/draganddrop_sound.mp3";
		audio.load();
    audio.play();
	}
  user: any
  
  ahorrar = ["Te ayuda a tener más confianza"];

  invertir = ["Te puedes diversificar"];
  questions=["Me da rendimientos","Es la opción más liquida",
  "Existen múltiples instrumentos financieros para esta estrategia","Me producirá mas dinero en el futuro", "Me protege contra la inflación"];

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
  }

  drop(event: CdkDragDrop <string[]>) {
		this.playAudio();
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  noReturnPredicate() {
    return false;
  }



}
