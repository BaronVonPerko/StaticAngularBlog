import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-grid',
  standalone: true,
  template: `
    <div class="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:max-w-none">
      <ng-content></ng-content>
    </div>
  `
})
export class PortfolioGridComponent {
}
