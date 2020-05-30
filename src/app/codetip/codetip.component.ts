import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodetipsService } from '../services/codetips.service';
import CodeTip from '../models/codetip';

@Component({
  selector: 'app-codetip',
  styles: [],
  template: `
  <div class="content">
    <h1 class="text-center">{{codeTip.title}}</h1>
    <img class="mx-auto" [src]="imageUrl">
  </div>`
})
export class CodetipComponent implements OnInit {

  codeTip: CodeTip;

  constructor(private route: ActivatedRoute, private codeTipService: CodetipsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.codeTipService.getCodeTipDetails(params.title)
        .subscribe(codeTip => this.codeTip = codeTip);
    });
  }

  get imageUrl() {
    return `/assets/images/${this.codeTip.image}`;
  }

}
