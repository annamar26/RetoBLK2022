import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
//import { jsPDF } from 'jspdf';

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
  /* doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
  }); */

  constructor(
    private userData: FirebaseService,
    private apiservice: FakeAPIService
  ) { }
  columns = ["id", "name", "email", "cp", "education", "age", "gender", "workfield", "level", "doneCourses", "goal"]
  index = ["id", "name", "email", "cp", "education", "age", "gender", "workfield", "level", "doneCourses", "goal"]
  tableContent = [] as any
  ngOnInit() {
    this.getUserData();
    console.log(this.userLevel);

    //let content = [] as any;

    /* this.apiservice.getAllUsersData().subscribe((data) => {
      content = data;
      let texto = '';
      for (let element of content) {
        let claves = Object.keys(element);

        for (let i = 0; i < claves.length; i++) {
          let clave = claves[i];
          texto += `${clave}: ${element[clave]} \n`;
        }

        texto += `............................. \n`;
       
      }
      this.doc.text(texto, 20, 20);
//       for(let i= 0; content.length; i+3){
//  this.doc.addPage('a4', 'p');
//       }
      console.log(content);
    }); */
    this.apiservice.getAllUsersData().subscribe((responses) => {
      this.tableContent = responses
    });
  }



  getUserData() {
    this.userData.getUser().subscribe((user: any) => {
      console.log(user.email);
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
            console.log(this.coursesToShow);
          });
      });
    });
  }
  /* createPdf() {
    this.doc.save('users-data.pdf');
  } */
}
