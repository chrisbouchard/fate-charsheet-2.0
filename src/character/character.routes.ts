import { RouterConfig } from '@angular/router';

import { CharacterOverlayComponent } from './character-overlay.component';
import { CharacterPageComponent } from './character-page.component';
import { CharacterSidebarComponent } from './character-sidebar.component';

export const CHARACTER_ROUTES: RouterConfig = [
  {
    path: 'character/:id',
    children: [
      { path: '', component: CharacterPageComponent },
      { path: '', component: CharacterOverlayComponent, outlet: 'overlay' },
      { path: '', component: CharacterSidebarComponent, outlet: 'sidebar' }
    ]
  }
];

