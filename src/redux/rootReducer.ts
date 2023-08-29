import { combineReducers } from 'redux';
import timeReducer from './timerSlice';

export const rootReducer = combineReducers({
    timer: timeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
