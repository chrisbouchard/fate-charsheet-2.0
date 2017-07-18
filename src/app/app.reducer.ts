import { routerReducer } from '@ngrx/router-store';

import { characterReducer } from '../character/character.reducer';
import { uiReducer } from '../ui/ui.reducer';

export const appReducers = {
    routerReducer: routerReducer,

    characterState: characterReducer,
    uiState: uiReducer
};
