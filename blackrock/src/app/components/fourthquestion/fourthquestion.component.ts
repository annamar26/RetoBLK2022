import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourthquestion',
  templateUrl: './fourthquestion.component.html',
  styleUrls: ['./fourthquestion.component.scss']
})
export class FourthquestionComponent  {

  ahorrar = ["Te ayuda a tener más confianza"];

  invertir = ["Te puedes diversificar"];
  questions=["Me da rendimientos","Es la opción más liquida",
  "Existen múltiples instrumentos financieros para esta estrategia","Me producirá mas dinero en el futuro", "Me protege contra la inflación"];

  drop(event: CdkDragDrop <string[]>) {
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
