import { Component, Input } from '@angular/core';

@Component({
  selector: 'fate-fab-action'
})
export class FabActionComponent {

    @Input() icon: string;
    @Input() label: string;

}

