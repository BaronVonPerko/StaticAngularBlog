import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-tech-stack',
  standalone: true,
  imports: [CommonModule],
  template: `<ul
    class="text-slate-700 text-base my-4 italic font-bold flex justify-center"
  >
    <li class="mx-4" *ngFor="let item of items">{{ item }}</li>
  </ul>`,
})
export class ResumeTechStackComponent {
  @Input() items: string[];

  constructor() {}
}
