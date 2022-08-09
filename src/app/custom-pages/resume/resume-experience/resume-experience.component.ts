import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconService } from '../../../services/icon.service';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
})
export class ResumeExperienceComponent {
  @Input() startDate: string;
  @Input() endDate = 'Present';
  @Input() company: string;
  @Input() position: string;
  @Input() location: string;

  open = true;

  constructor(private iconService: IconService) { }

  getIcon(icon: string): SafeHtml {
    return this.iconService.getIconPath(icon);
  }

  toggle() {
    this.open = !this.open;
  }
}
