import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <person
      title="{{ title }}"
      from="{{ from }}"
      name="{{ name }}"
      text="{{ text }}"
      [sentences]="sentences"
    ></person>
  `,
})
export class PanelComponent {
  @Input() title: string = '';
  @Input() from: string = '';
  @Input() name: string = '';
  @Input() text: string = '';
  @Input() sentences: string[] = [];
}
