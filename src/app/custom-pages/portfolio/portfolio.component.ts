import { Component, OnInit } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  portfolios: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolios().subscribe(portfolios => this.portfolios = portfolios);
  }

}
