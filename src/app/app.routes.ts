import { provideRouter, RouterConfig } from '@angular/router';

import { CHARACTER_ROUTES } from '../character/character.routes';
import { CharacterPageComponent } from '../character/character-page.component';
import { GROUP_ROUTES } from '../group/group.routes';
import { GroupPageComponent } from '../group/group-page.component';

export const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: '/group', pathMatch: 'full' },
  { path: 'player/:id', redirectTo: '/character', pathMatch: 'full' },
  ...CHARACTER_ROUTES,
  ...GROUP_ROUTES
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];

