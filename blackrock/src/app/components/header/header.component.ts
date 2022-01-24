import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	path= window.location.pathname
  userEmail= this.userData.getUser()
  constructor(public dialog: MatDialog,  private userData: FirebaseService, private Router: Router) { }

	openDialog() {
    const dialogRef = this.dialog.open(ModalLoginComponent, {panelClass: 'my-custom-dialog-login'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }
	logOut(){
		this.userData.logOut()
		.then(() => {
			this.Router.navigate([""])
		})
	}

}
