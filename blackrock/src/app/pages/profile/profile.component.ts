import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userEmail = this.userData.getUser();
  color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 30;
  userName = '';
  userLevel = '';
  percentage = 0;
  leftCourses = 0;
  goal = '';
  coursesToShow = [] as any;
  women = 0;
  men = 0;
  noanswerGender = 0;
  chart: any;
  doc = new jsPDF({
    orientation: 'l',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
  });
  keys = [] as any;
  values = [] as any;
  header = [
    [
      'Nombre',
      'Email',
      'CP.',
      'Educacion',
      'Edad',
      'Sexo',
      'Ocupación',
      'Nivel',
      'Cursos hechos',
      'Meta',
      'ID',
    ],
  ];

  constructor(
    private userData: FirebaseService,
    private apiservice: FakeAPIService
  ) {}

  ngOnInit() {
    this.getUserData();
    this.apiservice.getAllUsersData().subscribe((data: any) => {
      let content = data;

      for (let element of content) {
        let valores = Object.values(element);

        this.values.push(valores);
      }
    });
       
  }

  getUserData() {
    this.userData.getUser().subscribe((user: any) => {
      this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
        this.userName = response[0].name;
        this.userLevel = response[0].level;
        this.percentage = (response[0].doneCourses * 100) / 15;
        this.leftCourses = 15 - response[0].doneCourses;
        this.goal = response[0].goal;
        this.apiservice
          .getLevelData(this.userLevel)
          .subscribe((response: any) => {
            this.coursesToShow = response;
          });
      });
    });
  }

  createPdf() {
    this.doc.setFontSize(24);
    this.doc.text('Usuarios registrados', 110, 10);
    this.doc.setFontSize(12);
    this.doc.setTextColor(99);

    (this.doc as any).autoTable({
      head: this.header,
      body: this.values,
      theme: 'grid',

      didDrawCell: (data: any) => {
        // console.log(data.column.index);
      },
    });
    this.doc.save('tableOfUsers.pdf');
  }
  createGraphicBySex() {}
}
