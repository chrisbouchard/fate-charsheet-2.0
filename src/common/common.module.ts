import { NgModule } from '@angular/core';

import { CharacterFacade } from './character-facade';
import { COMMON_PIPES } from './pipes';

@NgModule({
  declarations: [ COMMON_PIPES ],
  exports: [ COMMON_PIPES ],
  providers: [ CharacterFacade ]
})
export class CommonModule {}

