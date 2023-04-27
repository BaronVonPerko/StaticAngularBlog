import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBoxComponent } from '../../components/post-box/post-box.component';
import Post from '../../models/post';

@Component({
  selector: 'app-talks-archive',
  standalone: true,
  imports: [CommonModule, PostBoxComponent],
  template: `
    <h1 class="text-indigo-600">Talks</h1>

    <app-post-box *ngFor="let talk of talks" [post]="talk"></app-post-box>
  `,
})
export class TalksArchiveComponent {
  talks: Post[] = [
    {
      date: '2023-06-13',
      title: 'Custom RxJS Operators are Standing By!  Act Now!',
      image: 'custom-rxjs-operators-talk.png',
    },
  ];
}
