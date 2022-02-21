import { Component, OnInit } from '@angular/core';
import { CodetipsService } from 'src/app/services/codetips.service';
import CodeTip from 'src/app/models/codetip';
import { PageHeadService } from '../../services/page-head.service';

@Component({
  selector: 'app-code-tips-archive',
  templateUrl: './code-tips-archive.component.html',
  styles: []
})
export class CodeTipsArchiveComponent implements OnInit {

  codeTips: CodeTip[];

  constructor(private codeTipsService: CodetipsService, private pageHeadService: PageHeadService) {
  }

  ngOnInit(): void {
    this.codeTipsService.getCodeTips().subscribe(tips => this.codeTips = tips);

    this.pageHeadService.setTitle('Code Tips');
  }

  getImage(tip: CodeTip) {
    return `/assets/images/${tip.image}`;
  }

}
