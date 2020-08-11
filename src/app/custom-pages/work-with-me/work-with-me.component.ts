import { Component, OnInit } from '@angular/core';
import {PageHeadService} from "../../services/page-head.service";

@Component({
  selector: 'app-work-with-me',
  templateUrl: './work-with-me.component.html',
})
export class WorkWithMeComponent implements OnInit {
  projectChooserShown = false;

  constructor(private pageHeadService: PageHeadService) { }

  ngOnInit(): void {
    this.pageHeadService.setTitle("Work With Me");
  }
}
