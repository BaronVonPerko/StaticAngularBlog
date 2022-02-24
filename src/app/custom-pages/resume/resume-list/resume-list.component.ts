import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-list',
  template: ` <ul class="list-disc ml-4">
    <ng-content></ng-content>
  </ul>`,
})
export class ResumeListComponent {
  constructor() {}
}
