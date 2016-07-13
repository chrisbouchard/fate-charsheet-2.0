import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'fate-fab',
  styleUrls: [require<string>('./fab.component.less')],
  templateUrl: require<string>('./fab.component.haml')
})
export class FabComponent {
  @HostBinding('class.fate-fab-active')
  active: boolean = false;

  @HostListener('mouseover')
  onMouseOver(): void {
    this.active = true;
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this.active = false;
  }
}

