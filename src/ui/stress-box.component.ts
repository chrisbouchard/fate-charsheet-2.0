import { animate, Component, EventEmitter, Input, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'fate-stress-box',
  animations: [
    trigger('fill', [
      state('empty', style({
        display: 'none',
        top: '50%',
        right: '50%',
        bottom: '50%',
        left: '50%'
      })),
      state('filled', style({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      })),
      transition('empty => filled', animate('500ms ease-out')),
      transition('filled => empty', animate('500ms ease-in'))
    ])
  ],
  styleUrls: [require<string>('./stress-box.component.less')],
  templateUrl: require<string>('./stress-box.component.haml')
})
export class StressBoxComponent {

  @Input() label: number;
  @Input() filled: boolean;

  hover: boolean = false;

  currentFill(): string {
    return this.filled ? 'filled' : 'empty';
  }

  onMouseEnter(event: Event): void {
    if (event.eventPhase === Event.AT_TARGET) {
      this.hover = true;
    }
  }

  onMouseLeave(event: Event): void {
    if (event.eventPhase === Event.AT_TARGET) {
      this.hover = false;
    }
  }

}

