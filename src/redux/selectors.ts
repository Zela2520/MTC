import { RootState } from './rootReducer';

export const reducerGetTime = (state: RootState) => state.timer.time;
export const reducerGetIsActive = (state: RootState) => state.timer.isActive;
