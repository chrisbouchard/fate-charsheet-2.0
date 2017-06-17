import { characterReducer } from '../character/character.reducer';
import { uiReducer } from '../ui/ui.reducer';

export const appReducers = {
    characterState: characterReducer,
    uiState: uiReducer
};
