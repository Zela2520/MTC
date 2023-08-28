import { createContext, useCallback, useEffect, useState } from 'react';

type TimerContextType = {
    time: number;
    isActive: boolean;
    incrementTime: () => void;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void;
};

export const TimerContext = createContext<TimerContextType>();

interface Props {
    children: ReactNode;
}

export const TimerContextProvider: React.FC<Props> = ({ children }) => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);

    const incrementTime = useCallback(() => {
        setTime((prev) => prev + 1);
    }, []);

    const stopTimer = useCallback(() => {
        setIsActive(false);
    }, []);

    const startTimer = useCallback(() => {
        setIsActive(true);
    }, []);

    const resetTimer = useCallback(() => {
        setTime(0);
        setIsActive(false);
    }, []);

    return (
        <TimerContext.Provider
            value={{
                time,
                isActive,
                incrementTime,
                startTimer,
                stopTimer,
                resetTimer,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
