import { useEffect, useRef } from 'react';

type IntervalCallback = () => void;

export const useInterval = (callback: IntervalCallback, delay: number) => {
    const savedCallback = useRef<IntervalCallback>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        };

        if (delay !== null) {
            const id = setTimeout(tick, delay);
            return () => clearTimeout(id);
        }
    }, [delay]);
};
