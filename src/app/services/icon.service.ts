import { Injectable } from '@angular/core';

class SvgIcon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  icons: SvgIcon[];

  constructor() {
    this.icons = [
      {name: 'md-emoji-happy', path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'},
      {name: 'md-pencil', path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>'},
      {name: 'md-tag', path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>'},
      {name: 'md-currency-dollar', path: '<path fill="#4A5568" d="M13.843 9.655a1 1 0 101.511-1.31l-1.51 1.31zm-3.686 4.69a1 1 0 00-1.51 1.31l1.51-1.31zM13 7a1 1 0 10-2 0h2zm-2 10a1 1 0 102 0h-2zm9-5a8 8 0 01-8 8v2c5.523 0 10-4.477 10-10h-2zm-8 8a8 8 0 01-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8a8 8 0 018-8V2C6.477 2 2 6.477 2 12h2zm8-8a8 8 0 018 8h2c0-5.523-4.477-10-10-10v2zm0 7c-.659 0-1.21-.18-1.567-.418C10.07 10.34 10 10.114 10 10H8c0 .99.602 1.765 1.324 2.246.729.486 1.678.754 2.676.754v-2zm-2-1c0-.114.07-.34.433-.582C10.79 9.18 11.342 9 12 9V7c-.998 0-1.947.268-2.676.754C8.602 8.234 8 9.009 8 10h2zm2-1c.904 0 1.563.332 1.843.655l1.511-1.31C14.597 7.472 13.317 7 12 7v2zm0 4c.659 0 1.21.18 1.567.418.364.243.433.468.433.582h2c0-.99-.602-1.765-1.324-2.246C13.947 11.268 12.998 11 12 11v2zm-1-6v1h2V7h-2zm0 9v1h2v-1h-2zm1-1c-.904 0-1.563-.332-1.843-.655l-1.51 1.31C9.402 16.528 10.682 17 12 17v-2zm2-1c0 .114-.07.34-.433.582-.357.238-.908.418-1.567.418v2c.998 0 1.947-.268 2.676-.754C15.398 15.766 16 14.991 16 14h-2zm-3-6v8h2V8h-2z"/>'},
      {name: 'md-collection', path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>'},
      {name: 'md-chat', path: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>'},
      {name: 'md-briefcase', path: '<path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />'}
    ];
  }

  getIcon(name: string) {
    return this.icons.find(icon => icon.name === name);
  }
}
