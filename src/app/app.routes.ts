import { Routes } from '@angular/router';

import { CHARACTER_ROUTES } from '../character/character.routes';
import { GROUP_ROUTES } from '../group/group.routes';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/group', pathMatch: 'full' },
  { path: 'player/:id', redirectTo: '/character', pathMatch: 'full' },
  {
    path: 'character',
    children: CHARACTER_ROUTES
  },
  {
    path: 'group',
    children: GROUP_ROUTES
  }
];

