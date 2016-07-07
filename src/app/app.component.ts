import { Component, OnInit } from '@angular/core';
import { RouteConfig, RouterLink, RouterOutlet } from '@angular/router-deprecated';

import { StoreLogMonitorComponent } from '@ngrx/store-log-monitor';

import { CharacterPageComponent } from '../character/character-page.component';
import { GroupPageComponent } from '../group/group-page.component';

@Component({
  selector: 'fate-app',
  directives: [RouterLink, RouterOutlet, StoreLogMonitorComponent],
  styleUrls: [require<string>('./app.component.less')],
  templateUrl: require<string>('./app.component.haml'),
})
@RouteConfig([
  { path: '/', component: GroupPageComponent, name: 'Home' },
  { path: '/group/:id', component: GroupPageComponent, name: 'Group' },
  { path: '/character/:id', component: CharacterPageComponent, name: 'Character' },
  { path: '/player/:id', component: CharacterPageComponent, name: 'Player' }
])
export class AppComponent {}

