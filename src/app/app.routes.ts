import { provideRouter, RouterConfig } from '@angular/router';

import { CharacterPageComponent } from '../character/character-page.component';
import { CHARACTER_ROUTES } from '../character/character.routes';
import { GroupPageComponent } from '../group/group-page.component';
import { GROUP_ROUTES } from '../group/group.routes';

export const APP_ROUTES: RouterConfig = [
  { path: '', redirectTo: '/group', pathMatch: 'full' },
  { path: 'player/:id', redirectTo: '/character', pathMatch: 'full' },
  ...CHARACTER_ROUTES,
  ...GROUP_ROUTES
];

