import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodetipsService } from '../services/codetips.service';
import CodeTip from '../models/codetip';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-codetip',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="content" *ngIf="codeTip$ | async; let codeTip">
    <h1 class="text-center">{{ codeTip.title }}</h1>
    <img class="mx-auto" [src]="imageUrl" />
  </div>`,
})
export class CodetipComponent implements OnInit {
  codeTip$: Observable<CodeTip>;
  imageUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private codeTipService: CodetipsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.codeTip$ = this.codeTipService
        .getCodeTipDetails(params.title)
        .pipe(tap((tip) => (this.imageUrl = `/assets/images/${tip.image}`)));
    });
  }
}
