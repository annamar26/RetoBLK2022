import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
userName: any 
  constructor() { }

  ngOnInit(){
    this.userName= sessionStorage.getItem('Nombre')
  }

}
