import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PageHeadService } from '../../services/page-head.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref],
  template: `
    <div class="">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20"
      >
        <h2
          class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          Welcome to Perko.DEV!
          <br />
          <span class="text-indigo-600">Built with Angular and Tailwind</span>
        </h2>
        <div class="mt-8 flex">
          <div class="inline-flex rounded-md shadow">
            <a
              routerLink="/contact"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring transition duration-150 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div class="ml-3 inline-flex">
            <a
              routerLink="/blog"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:border-indigo-300 transition duration-150 ease-in-out"
            >
              Read my blog
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-indigo-800 text-slate-100">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10"
          >
            Software engineer in Atlanta
          </h2>
          <p class="mt-3 text-xl leading-7 text-indigo-200 sm:mt-4">
            Specializing in WordPress, Angular, and Microsoft .NET web
            applications
          </p>
        </div>

        <div class="flex items-center justify-center mt-8">
          <div
            class="w-32 h-32 rounded-full bg-center bg-cover"
            style="background-image: url('/assets/images/2021_headshot.jpg')"
          ></div>
          <p class="px-8 max-w-xs">
            Hey there, I'm Chris! I'm a software engineer living in the Atlanta
            metropolitan area. When I'm not coding, I'm just a geek who loves
            travel, hiking, camping, trying new craft beer, watching movies, or
            playing with my crazy little beagle.
          </p>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  portfolioCount: number;

  constructor(
    private portfolioService: PortfolioService,
    private pageHeadService: PageHeadService
  ) {}

  ngOnInit() {
    this.portfolioService
      .getPortfolios()
      .subscribe((portfolios) => (this.portfolioCount = portfolios.length));

    this.pageHeadService.setTitle(null);
  }
}
