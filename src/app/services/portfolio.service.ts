import { Injectable } from '@angular/core';
import { default as Portfolios } from '../../_assets/portfolio/portfolio.json';
import Portfolio from '../models/portfolio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolios(): Observable<Portfolio[]> {
    return new Observable(subscriber => {
      subscriber.next(Portfolios.Portfolios);
    });
  }

  getPortfoliosOfType(selectedType): Observable<Portfolio[]> {
    return this.getPortfolios().pipe(map(data => data.filter(item => item.type === selectedType)));
  }

  getUniqueTypes(): Observable<string[]> {
    return new Observable(subscriber => {
      const types = [...new Set(Portfolios.Portfolios.map(portfolio => portfolio.type))];
      subscriber.next(types);
    });
  }
}
