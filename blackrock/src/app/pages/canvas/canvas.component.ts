import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FakeAPIService } from 'src/app/services/fake-api.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('#pieCanvas')
  women = 0;
  men = 0;
  noasnwerGender = 0;
  chart: any;
  nivel1 = 0;
  nivel2 = 0;
  nivel3 = 0;
  nivel4 = 0;
  nivel5 = 0;
  primaria = 0;
  media = 0;
  tecnico = 0;
  licenciatura = 0;
  posgrado = 0;

  constructor(
    private apiservice: FakeAPIService,
    private elementRef: ElementRef
  ) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.apiservice.getAllUsersData().subscribe((data: any) => {
      const women = data.filter((item: any) => item.gender === 'Mujer');
      const men = data.filter((item: any) => item.gender === 'Hombre');
      const noanswer = data.filter(
        (item: any) => item.gender === 'Prefiero no responder'
      );
      const nivel1 = data.filter((item: any) => item.level === 'Iniciado Jedi');
      const nivel2 = data.filter((item: any) => item.level === 'Padawan Jedi');
      const nivel3 = data.filter(
        (item: any) => item.level === 'Caballero Jedi'
      );
      const nivel4 = data.filter((item: any) => item.level === 'Maestro Jedi');
      const nivel5 = data.filter((item: any) => item.level === 'Maestro Yoda');
      const primaria = data.filter(
        (item: any) => item.education === 'Educación básica'
      );
      const media = data.filter(
        (item: any) => item.education === 'Educación media superior'
      );
      const tecnico = data.filter(
        (item: any) => item.education === 'Técnico superior'
      );
      const licenciatura = data.filter(
        (item: any) => item.education === 'Licenciatura'
      );
      const posgrado = data.filter(
        (item: any) => item.education === 'Posgrado'
      );

      this.women = women.length;
      this.men = men.length;
      this.noasnwerGender = noanswer.length;
      this.nivel1 = nivel1.length;
      this.nivel2 = nivel2.length;
      this.nivel3 = nivel3.length;
      this.nivel4 = nivel4.length;
      this.nivel5 = nivel5.length;
      this.primaria = primaria.length;
      this.media = media.length;
      this.tecnico = tecnico.length;
      this.licenciatura = licenciatura.length;
      this.posgrado = posgrado.length;
      this.createCanva();
      this.createBar();
      this.createPolar()
    });
  }
  createCanva(): void {
    const ctx = this.elementRef.nativeElement
      .querySelector('#pieCanvas')
      .getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Mujer', 'Hombre', 'Prefiero no responder'],
        datasets: [
          {
            backgroundColor: ['#008B5C', '#FD9BB4', '#FECE00'],
            data: [this.women, this.men, this.noasnwerGender],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Registros por sexo',
          },
        },
      },
    });
  }
  createBar(): void {
    const ctx = this.elementRef.nativeElement
      .querySelector('#barCanvas')
      .getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Iniciado Jedi',
          'Padawan Jedi',
          'Caballero Jedi',
          'Maestro Jedi',
          'Maestro Yoda',
        ],
        datasets: [
          {
            backgroundColor: [
              '#C80058',
              '#6D3FA2',
              '#008B5C',
              '#FD9BB4',
              '#FECE00',
            ],
            data: [
              this.nivel1,
              this.nivel2,
              this.nivel3,
              this.nivel4,
              this.nivel5,
            ],
            borderWidth: 1,
            label: 'Usuarios por nivel',
            minBarLength: 10,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Usuarios por nivel',
          },
        },
      },
    });
  }
  createPolar(): void {
    const ctx = this.elementRef.nativeElement
      .querySelector('#polarCanvas')
      .getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: [
          'Educación básica',
          'Educación media superior',
          'Técnico superior',
          'Licenciatura',
          'Posgrado',
        ],
        datasets: [
          {
            backgroundColor: [
              '#FD9BB4',
              '#C80058',
              '#FECE00',
              '#008B5C',
              '#6D3FA2',
            ],
            data: [
              this.primaria,
              this.media,
              this.tecnico,
              this.licenciatura,
              this.posgrado,
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Usuarios por nivel educativo',
          },
        },
      },
    });
  }
}
