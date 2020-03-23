import { Component, OnInit } from '@angular/core';
import CalculatorChoice from 'src/app/models/calculator-choice';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit {

  projectTypeChoices: CalculatorChoice[] = [];

  constructor() { }

  ngOnInit(): void {
    this.projectTypeChoices.push(
      {
        title: 'WordPress',
        // tslint:disable-next-line: max-line-length
        details: 'WordPress powers 35% of the web!  It is perfect for blogs or websites that are updated regularly.  Choose this if you want to have control over updating content and adding new pages yourself.',
        price: 600,
      }, {
        title: 'Static Website',
        // tslint:disable-next-line: max-line-length
        details: 'Static websites are lightweight, fast, and lend themselves to cheap hosting solutions.  Choose this if you are not planning to update your website often.  Updates would require a developer to modify and upload changes to the server.',
        price: 350,
      }, {
        title: 'Custom Web Application',
        // tslint:disable-next-line: max-line-length
        details: 'Web applications can vary from simple to extremely complex apps.  If you need a custom solution for a problem, this is the way to go!',
        price: 4550,
      });
  }

}
