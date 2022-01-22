import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userEmail= this.userData.getUser()
  constructor(public dialog: MatDialog,  private userData: FirebaseService ) { }

	openDialog() {
    const dialogRef = this.dialog.open(ModalLoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }


}
