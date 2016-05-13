import { Action, createMiddleware, Dispatcher, usePreMiddleware } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export interface Thunk {
  (dispatch: (action: Action) => void): void;
}

export const thunkMiddleware = usePreMiddleware(createMiddleware(
  (dispatcher: Dispatcher<Action>) => (all$: Observable<any>) => {
    const [thunks$, actions$]: [Observable<Thunk>, Observable<any>] = all$.partition(t => typeof t === 'function');
    thunks$.forEach(thunk => thunk(action => dispatcher.dispatch(action)));
    return actions$;
  },
  [Dispatcher]
));

