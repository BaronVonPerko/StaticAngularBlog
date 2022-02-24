import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-list',
  template: ` <ul class="list-disc mx-8">
    <ng-content></ng-content>
  </ul>`,
})
export class ResumeListComponent {
  constructor() {}
}
