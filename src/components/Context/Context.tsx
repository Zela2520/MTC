import { createContext, useCallback, useState } from 'react';

type TimerContextType = {
    time: number;
    isActive: boolean;
};

export const TimerContext = createContext<TimerContextType>();

interface Props {
    children: ReactNode;
}

export const TimerContextProvider: React.FC<Props> = ({ children }) => {
    const [time] = useState(0);
    const [isActive] = useState(true);

    return (
        <TimerContext.Provider
            value={{
                time,
                isActive,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
