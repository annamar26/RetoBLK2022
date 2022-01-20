import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondquestion',
  templateUrl: './secondquestion.component.html',
  styleUrls: ['./secondquestion.component.scss']
})
export class SecondquestionComponent implements OnInit {

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

	getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
