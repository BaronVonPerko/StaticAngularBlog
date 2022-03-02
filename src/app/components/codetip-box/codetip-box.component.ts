import { Component, OnInit, Input } from '@angular/core';
import CodeTip from 'src/app/models/codetip';
import { transition, trigger, useAnimation } from '@angular/animations';
import { loadAnimation } from '../../animations/loadAnimation';

@Component({
  selector: 'app-codetip-box',
  templateUrl: './codetip-box.component.html',
  styles: [],
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [useAnimation(loadAnimation)]),
    ]),
  ],
})
export class CodetipBoxComponent implements OnInit {

  @Input() codeTip: CodeTip;

  constructor() {
  }

  ngOnInit(): void {
  }

  get image() {
    return `/assets/images/${this.codeTip.image}`;
  }

  get tipLink() {
    return `/code-tips/${this.codeTip.link}`;
  }

}
