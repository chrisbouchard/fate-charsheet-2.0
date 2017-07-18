import { Routes } from '@angular/router';

import { CharacterIdResolver } from './character-id-resolver.service';
import { CharacterOverlayComponent } from './character-overlay.component';
import { CharacterPageComponent } from './character-page.component';
import { CharacterSidebarComponent } from './character-sidebar.component';

export const CHARACTER_ROUTES: Routes = [
    {
        path: ':id',
        resolve: {
            characterId: CharacterIdResolver
        },
        children: [
            { path: '', component: CharacterPageComponent },
            { path: '', component: CharacterOverlayComponent, outlet: 'overlay' },
            { path: '', component: CharacterSidebarComponent, outlet: 'sidebar' }
        ]
    }
];
