import { Component, OnInit } from '@angular/core';
import { CodetipsService } from 'src/app/services/codetips.service';
import CodeTip from 'src/app/models/codetip';
import { PageHeadService } from '../../services/page-head.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-code-tips-archive',
  templateUrl: './code-tips-archive.component.html',
  styles: []
})
export class CodeTipsArchiveComponent implements OnInit {

  codeTips$: Observable<CodeTip[]>;

  constructor(private codeTipsService: CodetipsService, private pageHeadService: PageHeadService) {
  }

  ngOnInit(): void {
    this.codeTips$ = this.codeTipsService.getCodeTips();
    this.pageHeadService.setTitle('Code Tips');
  }

}
