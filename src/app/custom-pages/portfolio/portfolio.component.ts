import { Component, OnInit } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PageHeadService } from '../../services/page-head.service';
import {flatMap, mergeMap, Observable, Subject, tap, toArray} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  portfolios$: Observable<Portfolio[]>;
  uniqueTypes$: Observable<string[]>;
  selectedItem: Portfolio;
  selectedType$: Subject<string>;

  constructor(private portfolioService: PortfolioService, private pageHeadService: PageHeadService) {
  }

  ngOnInit(): void {
    this.portfolios$ = this.portfolioService.getPortfolios().pipe(
      tap(p => console.log(p)),
      tap(p => console.log(this.selectedType$)),
      map(portfolios => portfolios.filter(portfolio => portfolio.type === this.selectedType$))
    );
    this.uniqueTypes$ = this.portfolioService.getUniqueTypes();
    this.pageHeadService.setTitle('Portfolio');
  }

  onTypeClicked(selectedType) {
    this.selectedType$.next(selectedType);
  }

  onClickAll() {
    // this.loadAllPortfolios();
    // this.selectedType = null;
  }

}
