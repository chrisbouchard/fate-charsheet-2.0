import { animate, Component, Input, state, style, transition, trigger } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'fate-overlay',
  directives: [ROUTER_DIRECTIVES],
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
  styleUrls: [require<string>('./overlay.component.less')],
  templateUrl: require<string>('./overlay.component.haml')
})
export class OverlayComponent {

  @Input() open: boolean = false;

  openState(): string {
    return this.open ? 'open' : 'closed';
  }

}

