import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
    time: number;
    isActive: boolean;
}

const initialState: TimeState = {
    time: 0,
    isActive: true,
};

export const timeSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTime: (state) => {
            state.isActive = true;
        },
        stopTime: (state) => {
            state.isActive = false;
        },
        resetTime: (state) => {
            state.isActive = false;
            state.time = 0;
        },
        incrementTime: (state) => {
            state.time++;
        },
    },
});

export const { startTime, stopTime, resetTime, incrementTime } =
    timeSlice.actions;
export default timeSlice.reducer;
