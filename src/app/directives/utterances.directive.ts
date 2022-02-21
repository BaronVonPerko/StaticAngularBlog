// https://nartc.me/blog/add-utterances-comments-scully

import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUtterances]',
})
export class UtterancesDirective implements AfterViewInit {
  @Input() appUtterances: string; // the blog title used for the issue name

  constructor(private readonly renderer: Renderer2, private readonly el: ElementRef) {
  }

  ngAfterViewInit() {
    try {
      const scriptEl: HTMLScriptElement = this.renderer.createElement('script');
      scriptEl.async = true;
      scriptEl.src = 'https://utteranc.es/client.js';
      scriptEl.setAttribute('repo', 'baronvonperko/staticangularblog');
      scriptEl.setAttribute('issue-term', this.appUtterances);
      scriptEl.setAttribute('id', 'utterances');
      scriptEl.setAttribute('theme', 'github-light');
      scriptEl.setAttribute('crossorigin', 'anonymous');
      this.renderer.appendChild(this.el.nativeElement, scriptEl);
    } catch (e) {
      console.log('Error adding utterances comments', e);
    }
  }
}
