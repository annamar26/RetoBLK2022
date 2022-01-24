import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Course } from 'src/classes/Course';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  userEmail= this.userData.getUser()
  userName = ""
  userLevel = ''
  coursesToShow = [] as any
  
  constructor(public dialog: MatDialog, private userData: FirebaseService, private apiservice: FakeAPIService) { }

  ngOnInit(){
    this.getUserLevel()
  }

  openDialog() {
    const dialogRef = this.dialog.open(PersonalInformationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getUserLevel(){
    this.userData.getUser().subscribe((user: any) => {
      console.log(user.email);
      this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
       this.userName =(response[0].name);
       this.userLevel =(response[0].level)
       this.apiservice.getLevelData(this.userLevel).subscribe((response: any)=>{
 this.coursesToShow = response
        console.log(this.coursesToShow)
      
     })
  })})}
}

