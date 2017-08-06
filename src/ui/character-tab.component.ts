import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input } from '@angular/core';

import { Character } from '../model/character';

@Component({
    selector: 'fate-character-tab',
    styleUrls: ['./character-tab.component.less'],
    templateUrl: './character-tab.component.haml',
    animations: [
        trigger('coverStateChanged', [
            state('default', style({
                'transform': `translate(0)`
            })),
            state('hovered', style({
                'transform': `translateX(-60px)`
            })),
            transition('* => *', animate('250ms ease-in-out'))
        ]),
        trigger('imageStateChanged', [
            state('default', style({
                'transform': `translate(25px)`
            })),
            state('hovered', style({
                'transform': `translateX(0)`
            })),
            transition('* => *', animate('250ms ease-in-out'))
        ]),
    ]
})
export class CharacterTabComponent {
    @Input() character: Character;

    hovered: boolean;

    get state(): string {
        if (this.hovered) {
            return 'hovered';
        }

        return 'default';
    }

    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: Event): void {
        if (event.eventPhase === Event.AT_TARGET) {
            this.hovered = true;
        }
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event: Event): void {
        if (event.eventPhase === Event.AT_TARGET) {
            this.hovered = false;
        }
    }
}
