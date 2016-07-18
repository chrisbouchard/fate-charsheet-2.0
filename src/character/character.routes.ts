import { RouterConfig } from '@angular/router';

import { CharacterPageComponent } from '../character/character-page.component';

export const CHARACTER_ROUTES: RouterConfig = [
  { path: 'character/:id', component: CharacterPageComponent }
];

