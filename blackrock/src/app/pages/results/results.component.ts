import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { FakeAPIService } from 'src/app/services/fake-api.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
userName: any
level: any
userEmail: any
  constructor(public dialog: MatDialog, private apiService: FakeAPIService, private userData: FirebaseService) { }

  ngOnInit(){
    this.userName= sessionStorage.getItem('Nombre')
		this.level = sessionStorage.getItem("level")
		const img = document.querySelector("#levelimg") as Element;
		if(this.level === "Iniciado Jedi"){
			img.setAttribute("src", "../../../assets/yoda_1.jpg");
		}
		if(this.level === "Padawan Jedi"){
			img.setAttribute("src", "../../../assets/padawan_2.png")
		}
		if(this.level === "Caballero Jedi"){
	img.setAttribute("src", "../../../assets/obi-results.png")
}
if(this.level === "Maestro Jedi"){
	img.setAttribute("src", "../../../assets/mace_windu_4.jpg")
}
if(this.level === "Maestro Yoda"){
	img.setAttribute("src", "../../../assets/yoda_5.jpg")
}
this.addLevelAPI()
console.log(this.addLevelAPI())
  }
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
	addLevelAPI(){
		this.userData.getUser().subscribe((user: any)=>{
			console.log(user.email)
			this.apiService.getEmailUser(user.email).subscribe((response: any)=>{
				console.log(response)
				this.apiService.updateUserData(response[0].id, {...response[0], level: this.level, email: user.email}).subscribe((data)=>{
					console.log(data)
				})
			})
		});
	}
}
