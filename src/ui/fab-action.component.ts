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

    doAction(event: any): void {
        this.action.emit(event);
    }

}
