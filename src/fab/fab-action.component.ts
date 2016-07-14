import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fate-fab-action',
  template: ''
})
export class FabActionComponent {

  @Input() color: string;
  @Input() icon: string;
  @Input() label: string;

  @Output() action = new EventEmitter();

  doClick(event: any): void {
    console.log('action click');
    this.action.emit(event);
  }

}

