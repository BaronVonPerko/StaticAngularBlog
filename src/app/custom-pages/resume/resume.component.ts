import { Component, OnInit } from '@angular/core';
import { ResumeExperienceComponent } from './resume-experience/resume-experience.component';
import { CommonModule } from '@angular/common';
import { ResumeListItemComponent } from './resume-list/resume-list-item/resume-list-item.component';
import { ResumeTechStackComponent } from './resume-tech-stack/resume-tech-stack.component';
import { ResumeListComponent } from './resume-list/resume-list.component';
import { ResumeSectionHeadingComponent } from './section-heading/resume-section-heading.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ResumeExperienceComponent,
    ResumeListItemComponent,
    ResumeTechStackComponent,
    ResumeListComponent,
    ResumeSectionHeadingComponent,
  ],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
