import { animate, Component, EventEmitter, Input, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'fate-stress-box',
  animations: [
    trigger('fill', [
      state('empty', style({
        backgroundColor: 'transparent',
        //borderColor: 'rgba(34, 36, 38, 0.15)',
        color: 'rgba(0, 0, 0, 0.87)'
      })),
      state('empty-hover', style({
        backgroundColor: 'transparent',
        //borderColor: 'rgba(218, 38, 38, 0.5)',
        color: '#DB2828'
      })),
      state('filled', style({
        backgroundColor: '#DB2828',
        //borderColor: 'rgba(34, 36, 38, 0.15)',
        color: '#FFFFFF'
      })),
      state('filled-hover', style({
        backgroundColor: '#D01919',
        //borderColor: '#D01919',
        color: '#FFFFFF'
      })),
      transition('* => *', animate('500ms ease'))
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
    const fillBase = this.filled ? 'filled' : 'open';
    const fillHover = this.hover ? '-hover' : '';

    console.log(`${this.label}: ${this.filled}`);
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

