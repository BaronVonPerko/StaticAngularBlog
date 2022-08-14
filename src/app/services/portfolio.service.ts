import { Injectable } from '@angular/core';
import { default as Portfolios } from '../../_assets/portfolio/portfolio.json';
import Portfolio from '../models/portfolio';
import {Observable, of, switchMap, toArray} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {
  }

  getPortfolios(): Observable<Portfolio[]> {
    return of(Portfolios.Portfolios);
  }

  getUniqueTypes(): Observable<string[]> {
    return this.getPortfolios().pipe(
      switchMap(portfolios => {
        return [...new Set(portfolios.map(portfolio => portfolio.type))];
      }),
      toArray()
    );
  }
}
