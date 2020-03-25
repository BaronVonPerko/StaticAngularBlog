import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CalculatorChoice from 'src/app/models/calculator-choice';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
})
export class ProjectTypeComponent implements OnInit {
  @Input() choice: CalculatorChoice;
  @Output() choiceSelected: EventEmitter<CalculatorChoice> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.choiceSelected.emit(this.choice);
  }

}
