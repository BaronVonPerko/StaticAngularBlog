import { Component, OnInit, Input } from '@angular/core';
import Page from 'src/app/models/page';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {
  @Input() page: Page;

  constructor() { }

  ngOnInit(): void {
  }

}
