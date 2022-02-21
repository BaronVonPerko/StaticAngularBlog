import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CodeTip from '../models/codetip';
import { default as CodeTips } from '../../_assets/codetips/codetips.json';

@Injectable({
  providedIn: 'root'
})
export class CodetipsService {

  constructor() {
  }

  getCodeTips(): Observable<CodeTip[]> {
    return new Observable(subscriber => {
      const codeTips = CodeTips.CodeTips.sort((a: CodeTip, b: CodeTip) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return bTime - aTime;
      });

      subscriber.next(codeTips);
    });
  }

  getCodeTipDetails(link: string): Observable<CodeTip> {
    return new Observable(subscriber => {
      subscriber.next(CodeTips.CodeTips.filter(tip => tip.link === link)[0]);
    });
  }
}
