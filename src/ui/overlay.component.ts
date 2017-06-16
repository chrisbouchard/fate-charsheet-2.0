import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'fate-overlay',
    animations: [
        trigger('overlay', [
            state('closed', style({
                opacity: 0,
                transform: 'scale(1.1)',
                display: 'none'
            })),
            state('open', style({
                opacity: 0.9,
                transform: 'scale(1)'
            })),
            transition('closed => open', animate('500ms ease')),
            transition('open => closed', animate('500ms ease'))
        ])
    ],
    styleUrls: ['./overlay.component.less'],
    templateUrl: './overlay.component.haml'
})
export class OverlayComponent {

    @Input() open: boolean = false;

    openState(): string {
        return this.open ? 'open' : 'closed';
    }

}
