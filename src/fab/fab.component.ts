import { Component, ContentChildren, EventEmitter, HostBinding, HostListener, Input, Renderer, OnDestroy, OnInit,
  Output, QueryList } from '@angular/core';

import { COMMON_PIPES } from '../common/pipes';

import { FabActionComponent } from './fab-action.component';

@Component({
  selector: 'fate-fab',
  pipes: [COMMON_PIPES],
  styleUrls: [require<string>('./fab.component.less')],
  templateUrl: require<string>('./fab.component.haml')
})
export class FabComponent implements OnDestroy, OnInit {

  @ContentChildren(FabActionComponent)
  actions: QueryList<FabActionComponent>;

  @Input() color: string;
  @Input() icon: string;
  @Input() label: string;

  @Input() inactiveColor: string;
  @Input() inactiveIcon: string;

  @Output() action = new EventEmitter();

  active: boolean = false;
  preload: boolean = true;
  showActions: boolean = true;
  showLabels: boolean = true;

  private unregisterClickListener: Function;

  constructor(private renderer: Renderer) {}

  ngOnInit(): void {
    this.unregisterClickListener = this.renderer.listenGlobal('body', 'click', (event: Event) => this.onClick(event));
  }

  ngOnDestroy(): void {
    this.unregisterClickListener();
  }

  activate(): void {
    this.active = true;
    this.showActions = true;
    this.showLabels = true;
  }

  deactivate(): void {
    this.active = false;
  }

  onClick(event: Event): void {
    if (this.active) {
      this.deactivate();
    }
    else {
      this.activate();
    }
  }

  onMouseEnter(event: Event): void {
    if (event.eventPhase === Event.AT_TARGET) {
      this.activate();
    }
  }

  onMouseLeave(event: Event): void {
    if (event.eventPhase === Event.AT_TARGET) {
      this.deactivate();
    }
  }

  checkActions(): void {
    if (!this.active) {
      this.showActions = false;
    }
  }

  checkLabel(): void {
    this.preload = false;

    if (!this.active) {
      this.showLabels = false;
    }
  }

  doAction(event: any): void {
    if (this.active) {
      this.action.emit(event);
    }
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

