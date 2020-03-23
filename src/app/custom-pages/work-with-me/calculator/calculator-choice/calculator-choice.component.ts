import { Component, OnInit, Input } from '@angular/core';
import CalculatorChoice from 'src/app/models/calculator-choice';

@Component({
  selector: 'app-calculator-choice',
  templateUrl: './calculator-choice.component.html',
})
export class CalculatorChoiceComponent implements OnInit {
  @Input() choice: CalculatorChoice;

  constructor() { }

  ngOnInit(): void {
  }

}
