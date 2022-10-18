import { Component, OnInit, OnDestroy } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PageHeadService } from '../../services/page-head.service';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PortfolioGridComponent } from './portfolio-grid.component';
import { PortfolioItemComponent } from './portfolio-item.component';
import { PortfolioModalComponent } from './portfolio-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioGridComponent, PortfolioItemComponent, PortfolioModalComponent],
  template: `
    <h1 class="text-indigo-600">Portfolio</h1>

    <ng-container *ngIf="portfolios$ | async; let portfolios">
      <ng-container *ngIf="uniqueTypes$ | async; let uniqueTypes">
        <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                Check out my work
              </h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                The following are websites and apps that I have created over the years. These utilize a variety of
                technology
                and frameworks.
              </p>
              <div *ngIf="selectedType$ | async; let selectedType"
                   class="mt-3 max-w-2xl mx-auto text-lg leading-7 sm:mt-4 flex flex-col lg:flex-row justify-between">
                <a class="cursor-pointer py-2"
                   [ngClass]="selectedType === 'All' ? 'font-bold' : ''"
                   (click)="onTypeClicked('All')">
                  All
                </a>
                <a class="cursor-pointer py-2"
                   *ngFor="let postType of uniqueTypes"
                   [ngClass]="selectedType === postType ? 'font-bold' : ''"
                   (click)="onTypeClicked(postType)">
                  {{ postType }}
                </a>
              </div>
            </div>
            <app-portfolio-grid>
              <app-portfolio-item *ngFor="let portfolio of portfolios"
                                  (openModal)="selectedItem = portfolio"
                                  [portfolio]="portfolio"></app-portfolio-item>
            </app-portfolio-grid>
          </div>
        </div>

        <app-portfolio-modal [portfolioItem]="selectedItem" (itemClosed)="selectedItem = null"></app-portfolio-modal>
      </ng-container>
    </ng-container>
  `
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolios$: Observable<Portfolio[]>;
  uniqueTypes$: Observable<string[]>;
  selectedType$ = new BehaviorSubject<string>('All');
  onDestroy$ = new Subject();
  selectedItem: Portfolio;

  constructor(private portfolioService: PortfolioService, private pageHeadService: PageHeadService) {
  }

  ngOnInit(): void {
    this.selectedType$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(selectedType => {
      this.portfolios$ = this.portfolioService.getPortfolios().pipe(
        map(portfolios => {
            if (selectedType !== 'All') {
              return portfolios.filter(portfolio => portfolio.type === selectedType);
            }
            return portfolios;
          }
        )
      );
    });

    this.uniqueTypes$ = this.portfolioService.getUniqueTypes();
    this.pageHeadService.setTitle('Portfolio');
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }

  onTypeClicked(selectedType) {
    this.selectedType$.next(selectedType);
  }

}
