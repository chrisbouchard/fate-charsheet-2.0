import { RouterConfig } from '@angular/router';

import { GroupPageComponent } from '../group/group-page.component';

export const GROUP_ROUTES: RouterConfig = [
  { path: 'group', component: GroupPageComponent },
  { path: 'group/:id', component: GroupPageComponent }
];

