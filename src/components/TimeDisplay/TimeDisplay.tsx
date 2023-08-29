import styles from './TimeDisplay.module.scss';
import { useInterval } from '../../hooks/useInterval/useInterval';
import { useDispatch, useSelector } from 'react-redux';
import { reducerGetTime, reducerGetIsActive } from '../../redux/selectors';
import { incrementTime } from '../../redux/timerSlice';
import { useEffect } from 'react';

interface Props {
    initialValue?: number;
}

export const Time: React.FC<Props> = () => {
    const time = useSelector(reducerGetTime);
    const isActive = useSelector(reducerGetIsActive);
    const dispatch = useDispatch();

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    useEffect(() => {
        let timer = 0;

        if (isActive) {
            timer = setInterval(() => {
                dispatch(incrementTime());
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isActive]);

    return (
        <div>
            <h1 className={styles.timer__text}>{formatTime(time)}</h1>
        </div>
    );
};
