import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'fate-fab',
  styleUrls: [require<string>('./fab.component.less')],
  templateUrl: require<string>('./fab.component.haml')
})
export class FabComponent {

  @HostBinding('class.fate-fab-active')
  active: boolean = false;

  @HostListener('mouseenter', ['$event.target', '$event.currentTarget'])
  onActivate(target: any, currentTarget: any): void {
    if (target === currentTarget) {
      this.active = true;
    }
  }

  @HostListener('mouseleave', ['$event.target', '$event.currentTarget'])
  onDeactivate(target: any, currentTarget: any): void {
    if (target === currentTarget) {
      this.active = false;
    }
  }

  @HostListener('click')
  onClick(): void {
    this.active = !this.active;
  }

}

