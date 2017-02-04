import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { HalModule } from 'ng2-hal';

import { CharacterModule } from '../character/character.module';
import { CommonModule } from '../common/common.module';
import { GroupModule } from '../group/group.module';
import { UIModule } from '../ui/ui.module';

import { DEFAULT_APP_STATE } from '../app/app.state';
import { CharacterEffects } from '../character/character.effects';
import { characterReducer } from '../character/character.reducer';
import { uiReducer } from '../ui/ui.reducer';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    CharacterModule,
    CommonModule,
    EffectsModule.run(CharacterEffects),
    GroupModule,
    HalModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        position: 'right',
        visible: false
      })
    }),
    StoreLogMonitorModule,
    StoreModule.provideStore({
      characterState: characterReducer,
      uiState: uiReducer
    }, DEFAULT_APP_STATE),
    UIModule
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ]
})
export class AppModule {}

