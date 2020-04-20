import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio;
  @Output() openModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get imageSrc(): string {
    return `/assets/images/${this.portfolio.image}`;
  }

  imageClicked() {
    this.openModal.emit();
  }

}
