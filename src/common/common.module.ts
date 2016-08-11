import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CharacterFacade } from './character-facade';
import { COMMON_PIPES } from './pipes';

@NgModule({
  imports: [ NgCommonModule ],
  declarations: [ COMMON_PIPES ],
  exports: [ COMMON_PIPES, NgCommonModule ],
  providers: [ CharacterFacade ]
})
export class CommonModule {}

