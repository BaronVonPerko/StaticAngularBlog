import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconService } from '../../../services/icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mb-12">
      <div
        *ngIf="startDate && endDate"
        class="uppercase text-slate-400 text-sm font-semibold"
      >
        {{ startDate }} - {{ endDate }}
      </div>
      <div
        (click)="toggle()"
        class="text-slate-900 text-base my-2 hover:bg-slate-200 cursor-pointer"
      >
        <svg
          class="inline mr-3 h-6 w-6 text-gray-400 group-focus:text-gray-300 transition ease-in-out duration-150 rotate-180"
          [ngClass]="{ 'rotate-0': !open }"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          [innerHTML]="getIcon('md-chevron-down')"
        ></svg>
        <span class="font-bold">{{ position }}</span>
        <span *ngIf="company && location"
          >,&nbsp;{{ company }},&nbsp;{{ location }}</span
        >
      </div>
      <div *ngIf="open">
        <ng-content></ng-content>
      </div>
    </section>
  `,
})
export class ResumeExperienceComponent {
  @Input() startDate: string;
  @Input() endDate = 'Present';
  @Input() company: string;
  @Input() position: string;
  @Input() location: string;

  open = true;

  constructor(private iconService: IconService) {}

  getIcon(icon: string): SafeHtml {
    return this.iconService.getIconPath(icon);
  }

  toggle() {
    this.open = !this.open;
  }
}
