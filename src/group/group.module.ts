import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonModule } from '../common/common.module';
import { UIModule } from '../ui/ui.module';

import { GroupPageComponent } from './group-page.component';

@NgModule({
  imports: [ CommonModule, NgCommonModule, UIModule ],
  declarations: [ GroupPageComponent ],
  exports: [ GroupPageComponent ]
})
export class GroupModule {}

