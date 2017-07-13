import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SuiModule } from 'ng2-semantic-ui';

import { CharacterModule } from '../character/character.module';
import { CommonModule } from '../common/common.module';
import { GroupModule } from '../group/group.module';
import { UIModule } from '../ui/ui.module';

import { CharacterEffects } from '../character/character.effects';

import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';
import { APP_ROUTES } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(APP_ROUTES),

        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([CharacterEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),

        SuiModule,

        CharacterModule,
        CommonModule,
        GroupModule,
        UIModule,
    ],
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ]
})
export class AppModule {}
