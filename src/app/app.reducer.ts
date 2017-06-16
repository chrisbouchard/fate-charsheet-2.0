import { ActionReducer, combineReducers } from '@ngrx/store';

import { characterReducer } from '../character/character.reducer';
import { uiReducer } from '../ui/ui.reducer';

import { AppState } from './app.state';

export function appReducer(): ActionReducer<AppState> {
    return combineReducers({
        characterState: characterReducer,
        uiState: uiReducer
    });
}
