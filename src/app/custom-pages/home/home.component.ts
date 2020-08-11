import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {CodetipsService} from "../../services/codetips.service";
import {PageHeadService} from "../../services/page-head.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  portfolioCount: number;

  constructor(private portfolioService: PortfolioService, private pageHeadService: PageHeadService) { }

  ngOnInit() {
    this.portfolioService.getPortfolios()
      .subscribe(portfolios => this.portfolioCount = portfolios.length);

    this.pageHeadService.setTitle(null);
  }

}
