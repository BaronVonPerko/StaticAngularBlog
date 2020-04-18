import { Component, OnInit, Input } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio;

  constructor() { }

  ngOnInit(): void {
  }

  get imageSrc(): string {
    return `/assets/images/${this.portfolio.image}`;
  }

}
