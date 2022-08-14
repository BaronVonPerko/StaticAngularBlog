import {Component, OnInit, OnDestroy} from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import {PortfolioService} from 'src/app/services/portfolio.service';
import {PageHeadService} from '../../services/page-head.service';
import {flatMap, mergeMap, Observable, BehaviorSubject, Subject, tap, toArray} from "rxjs";
import {filter, map, takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
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
              return portfolios.filter(portfolio => portfolio.type === selectedType)
            }
            return portfolios;
          }
        )
      );
    })

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
