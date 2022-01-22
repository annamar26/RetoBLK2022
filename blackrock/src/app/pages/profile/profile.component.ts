import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'determinate';
  value = 20;
  bufferValue = 30;

	userEmail= this.userData.getUser()

  constructor(private userData: FirebaseService) { }

  ngOnInit(): void {
  }

}
