import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit,
  Output, QueryList, Renderer } from '@angular/core';

import { FabActionComponent } from './fab-action.component';

@Component({
  selector: 'fate-fab',
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

  constructor(private elementRef: ElementRef, private renderer: Renderer) {}

  ngOnInit(): void {
    this.unregisterClickListener =
      this.renderer.listenGlobal('body', 'click', this.onGlobalClick.bind(this));
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

  onGlobalClick(event: Event): void {
    const inFab = this.elementRef.nativeElement.contains(event.target);

    if (this.active || !inFab) {
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

