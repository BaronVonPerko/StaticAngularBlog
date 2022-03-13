import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
})
export class ResumeExperienceComponent {
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() company: string;
  @Input() position: string;
  @Input() location: string;

  open = true;

  constructor() { }

  toggle() {
    this.open = !this.open;
  }
}
