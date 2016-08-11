import { Routes } from '@angular/router';

import { GroupPageComponent } from '../group/group-page.component';

export const GROUP_ROUTES: Routes = [
  { path: '', component: GroupPageComponent },
  { path: ':id', component: GroupPageComponent }
];

