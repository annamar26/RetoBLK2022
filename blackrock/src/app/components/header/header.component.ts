import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  path = window.location.pathname;
  userEmail = this.userData.getUser();
  userName = '';
  constructor(
    public dialog: MatDialog,
    private userData: FirebaseService,
    private Router: Router,
    private APIservice: FakeAPIService
  ) {}

  openDialog(valor: string) {
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      panelClass: 'my-custom-dialog-login',
    });
    sessionStorage.setItem('valorModal', 'true');
    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    // console.log(this.getUserData());
  }

  getUserData() {
    this.userData.getUser().subscribe((user: any) => {
      // console.log(user._delegate.displayName);
      this.APIservice.getEmailUser(user.email).subscribe((response: any) => {
        this.userName = response[0].name;
      });
    });
  }

  logOut() {
    this.userData.logOut().then(() => {
      this.Router.navigate(['']);
    });
  }
}
