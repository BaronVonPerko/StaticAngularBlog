import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-item',
  styles: [],
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div class="shrink-0">
        <img class="cursor-pointer h-48 w-full object-cover object-top" alt="portfolio item"
             [src]="imageSrcMedium"
             (click)="imageClicked()"/>
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm leading-5 font-medium text-indigo-600">
            {{ portfolio.type }}
          </p>
          <div class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ portfolio.title }}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500">
              {{ portfolio.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="p-2 text-right" *ngIf="portfolio.url">
        <a target="_blank" [href]="portfolio.url">Visit Site</a>
      </div>
    </div>
  `
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
