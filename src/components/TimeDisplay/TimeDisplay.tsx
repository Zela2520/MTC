import styles from './TimeDisplay.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reducerGetTime, reducerGetIsActive } from '../../redux/selectors';
import { incrementTime } from '../../redux/timerSlice';
import { useEffect } from 'react';
import { formatTime } from '../../utils/formateTime';

interface Props {
    initialValue?: number;
}

export const Time: React.FC<Props> = () => {
    const time = useSelector(reducerGetTime);
    const isActive = useSelector(reducerGetIsActive);
    const dispatch = useDispatch();

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
        <>
            <h1 className={styles.timer__text}>{formatTime(time)}</h1>
        </>
    );
};
