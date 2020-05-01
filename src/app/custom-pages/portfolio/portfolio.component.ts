import { Component, OnInit } from '@angular/core';
import Portfolio from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  portfolios: Portfolio[] = [];
  selectedItem: Portfolio;
  uniqueTypes: string[];
  selectedType: string;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.loadAllPortfolios();
    this.portfolioService.getUniqueTypes().subscribe(types => this.uniqueTypes = types);
  }

  onTypeClicked(selectedType) {
    this.selectedType = selectedType;
    this.portfolioService.getPortfoliosOfType(selectedType).subscribe(portfolios => this.portfolios = portfolios);
  }

  onClickAll() {
    this.loadAllPortfolios();
    this.selectedType = null;
  }

  loadAllPortfolios() {
    this.portfolioService.getPortfolios().subscribe(portfolios => this.portfolios = portfolios);
  }

}
