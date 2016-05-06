import {Component, OnInit} from '@angular/core';
import {RouteConfig, RouterLink, RouterOutlet} from '@angular/router-deprecated';

import {CharacterPage} from '../character/character_page';
import {GroupPage} from '../group/group_page';

@Component({
  selector: 'body',
  directives: [RouterLink, RouterOutlet],
  styles: [require<string>('./app.less')],
  template: require<string>('./app.html.haml'),
})
@RouteConfig([
  { path: '/', component: GroupPage, name: 'Home' },
  { path: '/group/:id', component: GroupPage, name: 'Group' },
  { path: '/character/:id', component: CharacterPage, name: 'Character' },
  { path: '/player/:id', component: CharacterPage, name: 'Player' }
])
export class App {}

