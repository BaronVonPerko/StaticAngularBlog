import { Component, Input, Output, EventEmitter } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-modal',
  styles: [],
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="portfolioItem"
         class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
      <!--
        Background overlay, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="bg-gray-100 rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full sm:p-6">
        <div>
          <div class="mx-auto flex items-center justify-center">
            <img [src]="imgSrc" class="shadow-xl" style="height: 60vh;" alt="portfolio image">
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ portfolioItem.title }}
            </h3>
            <div class="mt-2">
              <p class="text-sm leading-5 text-gray-500">
                {{ portfolioItem.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
      <span class="flex w-full rounded-md shadow-sm">
        <button type="button"
                (click)="closeModal()"
                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5">
          Go back to portfolio
        </button>
      </span>
        </div>
      </div>
    </div>
  `
})
export class PortfolioModalComponent {
  @Input() portfolioItem: Portfolio;
  @Output() itemClosed = new EventEmitter();

  get imgSrc(): string {
    return `/assets/images/${this.portfolioItem.image}`;
  }

  closeModal() {
    this.itemClosed.emit();
  }

}
