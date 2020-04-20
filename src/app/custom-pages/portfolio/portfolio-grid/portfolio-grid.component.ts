import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-grid',
  template: `
  <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
    <ng-content></ng-content>
  </div>
  `
})
export class PortfolioGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
