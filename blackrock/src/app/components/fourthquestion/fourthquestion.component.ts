import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourthquestion',
  templateUrl: './fourthquestion.component.html',
  styleUrls: ['./fourthquestion.component.scss'],
})
export class FourthquestionComponent implements OnInit {
  @Input() userName: string = '';
  playAudio() {
    const audio = new Audio();
    audio.src = '../../../assets/draganddrop_sound.mp3';
    audio.load();
    audio.play();
  }
  user: any;

  ahorrar = ['Te ayuda a tener más confianza'];

  invertir = ['Te puedes diversificar'];
  questions = [
    'Me da rendimientos',
    'Es la opción más liquida',
    'Existen múltiples instrumentos financieros para esta estrategia',
    'Me producirá más dinero en el futuro',
    'Me protege contra la inflación',
  ];

  answersAhorrar = [
    'Es la opción más liquida',
    'Te ayuda a tener más confianza',
  ];
  answersInvertir = [
    'Existen múltiples instrumentos financieros para esta estrategia',
    'Me da rendimientos',
    'Me producirá más dinero en el futuro',
    'Me protege contra la inflación',
    'Te puedes diversificar',
  ];

  ngOnInit() {
    this.user = sessionStorage.getItem('Nombre');
  }

  drop(event: CdkDragDrop<string[]>) {
    this.playAudio();
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log;
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.ahorrar.sort(), this.invertir.sort());
    const selectAhorrar = this.ahorrar.sort();
    const selectInvertir = this.invertir.sort();
    let points = 0;
    if (selectAhorrar.includes('Es la opción más liquida')) {
      points++;
    }
    if (
      selectInvertir.includes(
        'Existen múltiples instrumentos financieros para esta estrategia'
      )
    ) {
      points++;
    }
    if (selectInvertir.includes('Me da rendimientos')) {
      points++;
    }
    if (selectInvertir.includes('Me producirá mas dinero en el futuro')) {
      points++;
    }
    if (selectInvertir.includes('Me protege contra la inflación')) {
      points++;
    }
    console.log(points);
    sessionStorage.setItem('Score4', points.toString());
    console.log(sessionStorage.getItem('Score4'));
  }

  noReturnPredicate() {
    return false;
  }
}
