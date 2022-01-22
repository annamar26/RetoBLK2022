import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/classes/Course';
import { PersonalInformationComponent } from '../../components/personal-information/personal-information.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  CourseLevel1: Course[] = [
    {
      name: 'Ahorro vs inversión',
      topic: 'Ahorro vs inversión',
      description: 'En este curso vas a aprender las diferencias entre ahorrar e invertir',
      duration: '4 semanas',
      image: 'https://media.istockphoto.com/photos/the-woman-hand-is-putting-a-coin-in-a-glass-bottle-and-a-pile-of-on-picture-id1185358443?k=20&m=1185358443&s=612x612&w=0&h=3mfXaLte0QYoz9qO8vp20aIoqvruxbInReRjuWybNa0='
    },
    {
      name: 'Ahorro vs inversión',
      topic: 'Ahorro vs inversión',
      description: 'En este curso vas a aprender las diferencias entre ahorrar e invertir',
      duration: '4 semanas',
      image: 'https://media.istockphoto.com/photos/the-woman-hand-is-putting-a-coin-in-a-glass-bottle-and-a-pile-of-on-picture-id1185358443?k=20&m=1185358443&s=612x612&w=0&h=3mfXaLte0QYoz9qO8vp20aIoqvruxbInReRjuWybNa0='
    },
    {
      name: 'Ahorro vs inversión',
      topic: 'Ahorro vs inversión',
      description: 'En este curso vas a aprender las diferencias entre ahorrar e invertir',
      duration: '4 semanas',
      image: 'https://media.istockphoto.com/photos/the-woman-hand-is-putting-a-coin-in-a-glass-bottle-and-a-pile-of-on-picture-id1185358443?k=20&m=1185358443&s=612x612&w=0&h=3mfXaLte0QYoz9qO8vp20aIoqvruxbInReRjuWybNa0='
    },
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PersonalInformationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

