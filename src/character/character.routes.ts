import { RouterConfig } from '@angular/router';

import { CharacterPageComponent } from './character-page.component';
import { CharacterSidebarComponent } from './character-sidebar.component';

export const CHARACTER_ROUTES: RouterConfig = [
  {
    path: 'character/:id',
    children: [
      { path: '', component: CharacterPageComponent },
      { path: '', component: CharacterSidebarComponent, outlet: 'sidebar' }
    ]
  }
];

