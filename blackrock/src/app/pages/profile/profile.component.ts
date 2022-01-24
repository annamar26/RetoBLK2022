import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userEmail= this.userData.getUser()
	color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'determinate';
  bufferValue = 30;
  userName = ""
  userLevel = ''
  percentage = 0
  leftCourses = 0
  goal= ""
  coursesToShow = [] as any
  constructor(private userData: FirebaseService, private apiservice: FakeAPIService) { }

  ngOnInit() {
this.getUserData()
console.log(this.userLevel)
  }

  getUserData(){
    this.userData.getUser().subscribe((user: any) => {
      console.log(user.email);
      this.apiservice.getEmailUser(user.email).subscribe((response: any) => {
       this.userName =(response[0].name);
       this.userLevel =(response[0].level)
       this.percentage = ((response[0].doneCourses)*100)/15
       this.leftCourses= 15 -(response[0].doneCourses)
       this.goal = response[0].goal
       this.apiservice.getLevelData(this.userLevel).subscribe((response: any)=>{
 this.coursesToShow = response
        console.log(this.coursesToShow)
      
     })
  })})}
  // getLevelData(){
  //   this.apiservice.getLevelData(this.userLevel).subscribe((response: any)=>{
     
  //      console.log(response)
       
     
  //   })
  // }
  
}
