import styles from './TimeDisplay.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reducerGetTime, reducerGetIsActive } from '../../redux/selectors';
import { incrementTime } from '../../redux/timerSlice';
import { useEffect, useRef } from 'react';
import { formatTime } from '../../utils/formateTime';

interface Props {
    initialValue?: number;
}

export const Time: React.FC<Props> = () => {
    const time = useSelector(reducerGetTime);
    const isActive = useSelector(reducerGetIsActive);
    const dispatch = useDispatch();
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (isActive) {
            const tick = () => {
                dispatch(incrementTime());
                timerRef.current = setTimeout(tick, 1000);
            };

            tick();
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isActive]);

    return (
        <>
            <h1 className={styles.timer__text}>{formatTime(time)}</h1>
        </>
    );
};
