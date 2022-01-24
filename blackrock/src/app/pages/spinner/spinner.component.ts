import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const resultarray = [
      sessionStorage.getItem('Score1'),
      sessionStorage.getItem('Score2'),
      sessionStorage.getItem('Score3'),
      sessionStorage.getItem('Score4'),
    ];
    const scoremap = resultarray.map((x) => parseInt(x!));
    const score = scoremap.reduce((a, b) => a + b);
    let description = '';
    let level = '';
    console.log(resultarray, scoremap, score);
    console.log(typeof score);

    switch (score) {
      case 0:
        level = 'Iniciado Jedi';
        break;
      case 1:
        level = 'Iniciado Jedi';
        break;
      case 2:
        level = 'Iniciado Jedi';
        break;
      case 3:
        level = 'Iniciado Jedi';
        break;
      case 4:
        level = 'Iniciado Jedi';
        break;
      case 5:
        level = 'Iniciado Jedi';
        break;
      case 6:
        level = 'Iniciado Jedi';
        break;
      case 7:
        level = 'Iniciado Jedi';
        break;
      case 8:
        level = 'Padawan Jedi';
        break;
      case 9:
        level = 'Padawan Jedi';
        break;
      case 10:
        level = 'Padawan Jedi';
        break;
      case 11:
        level = 'Caballero Jedi';
        break;
      case 12:
        level = 'Caballero Jedi';
        break;
      case 13:
        level = 'Caballero Jedi';
        break;
      case 14:
        level = 'Maestro Jedi';
        break;
      case 15:
        level = 'Maestro Jedi';
        break;
      case 16:
        level = 'Maestro Jedi';
        break;

      default:
        level = 'Maestro Yoda';
        break;
    }
    if (level === 'Iniciado Jedi') {
      description = 'Si aprender a invertir quieres... estudiar mucho tú debes';
    } else if (level === 'Padawan Jedi') {
      description = 'Poco conocimiento de la fuerza tienes... seguir entrenando debes';
    } else if (level === 'Caballero Jedi') {
      description = 'Pocas ganancias invirtiendo y ahorrando tienes... arriesgarte más tu debes';
    } else if (level === 'Mestro Jedi') {
      description = 'Poderoso maestro ya eres... confiarte no debes';
    } else {
      description = 'Aliado de la fuerza ya eres... un último paso dar debes';
    }
   sessionStorage.setItem('description', description)
    sessionStorage.setItem('score', score.toString());
    sessionStorage.setItem('level', level);
    sessionStorage.getItem('level');
    console.log(sessionStorage.getItem('level'));
    if (sessionStorage.getItem('level') != '') {
      this.router.navigate(['results'])
    }
  }
}
