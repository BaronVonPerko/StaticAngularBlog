import { Component, OnInit } from '@angular/core';
import { PageHeadService } from '../../services/page-head.service';

@Component({
  selector: 'app-wpcui',
  templateUrl: './wpcui.component.html',
  styles: []
})
export class WpcuiComponent implements OnInit {

  constructor(private pageHeadService: PageHeadService) {
  }

  ngOnInit(): void {
    this.pageHeadService.setTitle('CustomizerUI Plugin for WordPress');
  }

}
