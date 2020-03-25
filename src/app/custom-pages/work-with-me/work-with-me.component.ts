import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-with-me',
  templateUrl: './work-with-me.component.html',
})
export class WorkWithMeComponent implements OnInit {
  projectChooserShown = false;

  constructor() { }

  ngOnInit(): void {
  }
}
