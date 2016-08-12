import { animate, Component, EventEmitter, Input, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'fate-stress-box',
  animations: [
    trigger('fill', [
      state('empty', style({
        backgroundColor: 'transparent',
        borderTopColor: 'rgba(34, 36, 38, 0.15)',
        borderRightColor: 'rgba(34, 36, 38, 0.15)',
        borderBottomColor: 'rgba(34, 36, 38, 0.15)',
        borderLeftColor: 'rgba(34, 36, 38, 0.15)',
        color: 'rgba(0, 0, 0, 0.87)'
      })),
      state('empty-hover', style({
        backgroundColor: 'transparent',
        borderTopColor: 'rgba(218, 38, 38, 0.5)',
        borderRightColor: 'rgba(218, 38, 38, 0.5)',
        borderBottomColor: 'rgba(218, 38, 38, 0.5)',
        borderLeftColor: 'rgba(218, 38, 38, 0.5)',
        color: '#DB2828'
      })),
      state('filled', style({
        backgroundColor: '#DB2828',
        borderTopColor: 'rgba(34, 36, 38, 0.15)',
        borderRightColor: 'rgba(34, 36, 38, 0.15)',
        borderBottomColor: 'rgba(34, 36, 38, 0.15)',
        borderLeftColor: 'rgba(34, 36, 38, 0.15)',
        color: '#FFFFFF'
      })),
      state('filled-hover', style({
        backgroundColor: '#D01919',
        borderTopColor: '#D01919',
        borderRightColor: '#D01919',
        borderBottomColor: '#D01919',
        borderLeftColor: '#D01919',
        color: '#FFFFFF'
      })),
      transition('empty => *', animate('2000ms ease')),
      transition('empty-hover => *', animate('2000ms ease')),
      transition('filled => *', animate('2000ms ease')),
      transition('filled-hover => *', animate('2000ms ease'))
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
    const fillBase = this.filled ? 'filled' : 'empty';
    const fillHover = this.hover ? '-hover' : '';

    return fillBase + fillHover;
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

