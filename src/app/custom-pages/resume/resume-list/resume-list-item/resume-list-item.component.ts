import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-list-item',
  template: `<li class="my-1"><ng-content></ng-content></li>`
})
export class ResumeListItemComponent {

  constructor() { }

}
