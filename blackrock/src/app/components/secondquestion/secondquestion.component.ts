import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondquestion',
  templateUrl: './secondquestion.component.html',
  styleUrls: ['./secondquestion.component.scss']
})
export class SecondquestionComponent implements OnInit {
  @Input() userName: string='';
	autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  points = 0;

	getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
 user: any
 
  constructor() { }

  ngOnInit(){
    this.user= sessionStorage.getItem('Nombre')
  }

  sendResults(){
    switch (this.value) {
      case 0||10||20:{this.points = 1}        
        break;
      case 30||40:{this.points = 2}        
        break;
      case 50||60:{this.points = 3}        
        break;
      case 70||80:{this.points = 4}        
        break;
      case 90||100:{this.points = 5}        
        break;
    
  }
  let str = this.points.toString()
  sessionStorage.setItem("Score2", str)
  sessionStorage.getItem("Score2")
  console.log(sessionStorage.getItem("Score2"))
}

}
