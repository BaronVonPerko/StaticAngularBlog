import { Component, OnInit } from '@angular/core';
import { CodetipsService } from 'src/app/services/codetips.service';
import CodeTip from 'src/app/models/codetip';
import { PageHeadService } from '../../services/page-head.service';
import { Observable } from 'rxjs';
import { CodetipBoxComponent } from '../../components/codetip-box/codetip-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-tips-archive',
  standalone: true,
  imports: [CodetipBoxComponent, CommonModule],
  template: `
    <h1 class="text-indigo-600">Code Tips</h1>

    <app-codetip-box
      *ngFor="let tip of codeTips$ | async"
      [codeTip]="tip"
    ></app-codetip-box>
  `,
})
export class CodeTipsArchiveComponent implements OnInit {
  codeTips$: Observable<CodeTip[]>;

  constructor(
    private codeTipsService: CodetipsService,
    private pageHeadService: PageHeadService
  ) {}

  ngOnInit(): void {
    this.codeTips$ = this.codeTipsService.getCodeTips();
    this.pageHeadService.setTitle('Code Tips');
  }
}
