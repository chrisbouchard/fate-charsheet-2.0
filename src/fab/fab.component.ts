import { Component, ContentChildren, EventEmitter, HostBinding, HostListener, Input, Output, QueryList } from '@angular/core';

import { COMMON_PIPES } from '../common/pipes';

import { FabActionComponent } from './fab-action.component';

@Component({
  selector: 'fate-fab',
  pipes: [COMMON_PIPES],
  styleUrls: [require<string>('./fab.component.less')],
  templateUrl: require<string>('./fab.component.haml')
})
export class FabComponent {

  @ContentChildren(FabActionComponent)
  actions: QueryList<FabActionComponent>;

  @Input() color: string;
  @Input() icon: string;
  @Input() label: string;

  @Input() inactiveColor: string;
  @Input() inactiveIcon: string;

  @Output() action = new EventEmitter();

  @HostBinding('class.fate-fab-active')
  active: boolean = false;

  @HostBinding('class.fate-fab-preload')
  preload: boolean = true;

  showLabels: boolean = true;

  @HostListener('mouseenter', ['$event.target', '$event.currentTarget'])
  onActivate(target: any, currentTarget: any): void {
    if (target === currentTarget) {
      this.active = true;
      this.showLabels = true;
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

  checkLabel(): void {
    if (!this.active) {
      this.showLabels = false;
    }
  }

  doClick(event: any): void {
    if (this.active) {
      console.log('main click');
      this.action.emit(event);
    }
  }

  show(): void {
    this.preload = false;
  }

  get currentColor(): string {
    if (!this.active && this.inactiveColor !== undefined) {
      return this.inactiveColor;
    }

    return this.color;
  }

  get currentIcon(): string {
    if (!this.active && this.inactiveIcon !== undefined) {
      return this.inactiveIcon;
    }

    return this.icon;
  }

}

