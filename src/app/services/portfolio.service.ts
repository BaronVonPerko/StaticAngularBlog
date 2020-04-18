import { Injectable } from '@angular/core';
import { Portfolios } from '../../_assets/portfolio/portfolio.json';
import Portfolio from '../models/portfolio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolios(): Observable<Portfolio[]> {
    return new Observable(subscriber => {
      subscriber.next(Portfolios);
    });
  }
}
