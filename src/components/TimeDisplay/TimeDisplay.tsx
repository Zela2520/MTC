import React, { useContext } from 'react';
import styles from './TimeDisplay.module.scss';
import { TimerContext } from '../Context/Context';

interface Props {
    initialValue?: number;
}

export const Time: React.FC<Props> = () => {
    const timerContext = useContext(TimerContext);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    return (
        <div>
            <h1 className={styles.timer__text}>
                {formatTime(timerContext?.time || 0)}
            </h1>
        </div>
    );
};
