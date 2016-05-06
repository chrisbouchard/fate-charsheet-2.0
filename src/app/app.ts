import { Component, OnInit } from '@angular/core';
import { RouteConfig, RouterLink, RouterOutlet } from '@angular/router-deprecated';

import { CharacterPageComponent } from '../character/character_page';
import { GroupPageComponent } from '../group/group_page';

@Component({
  selector: 'fate-app',
  directives: [RouterLink, RouterOutlet],
  styles: [require<string>('./app.less')],
  template: require<string>('./app.html.haml'),
})
@RouteConfig([
  { path: '/', component: GroupPageComponent, name: 'Home' },
  { path: '/group/:id', component: GroupPageComponent, name: 'Group' },
  { path: '/character/:id', component: CharacterPageComponent, name: 'Character' },
  { path: '/player/:id', component: CharacterPageComponent, name: 'Player' }
])
export class AppComponent {}

