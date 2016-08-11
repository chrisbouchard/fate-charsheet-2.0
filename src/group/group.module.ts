import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '../common/common.module';
import { UIModule } from '../ui/ui.module';

import { GroupPageComponent } from './group-page.component';
import { GROUP_ROUTES } from './group.routes';

@NgModule({
  imports: [
    CommonModule,
    UIModule
  ],
  declarations: [ GroupPageComponent ],
  exports: [ GroupPageComponent ]
})
export class GroupModule {}

