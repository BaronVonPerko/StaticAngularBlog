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

  constructor() {
  }

  ngOnInit(): void {
  }

  get imageSrcMedium(): string {
    const imageName = this.portfolio.image.split('.');

    return `/_assets/images/${imageName[0]}-400.${imageName[1]}`;
  }

  imageClicked() {
    this.openModal.emit();
  }

}
