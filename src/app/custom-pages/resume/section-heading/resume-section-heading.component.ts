import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section-heading',
  template: `<h2 class="text-lg text-indigo-600 uppercase mt-8 border-b-2 border-solid border-indigo-600">
    <ng-content></ng-content>
  </h2>`,
})
export class ResumeSectionHeadingComponent {
  constructor() {}
}
