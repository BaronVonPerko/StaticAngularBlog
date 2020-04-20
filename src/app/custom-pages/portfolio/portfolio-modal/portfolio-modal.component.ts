import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styles: []
})
export class PortfolioModalComponent implements OnInit {
  @Input() portfolioItem: Portfolio;
  @Output() itemClosed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get imgSrc(): string {
    return `/assets/images/${this.portfolioItem.image}`;
  }

  closeModal() {
    this.itemClosed.emit();
  }

}
