import styles from './Main.module.scss';
import classNames from 'classnames';
import { UiButton } from '../../uikit/Button/Button';
import { Time } from '../TimeDisplay/TimeDisplay';
import { useDispatch } from 'react-redux';
import { resetTime, startTime, stopTime } from '../../redux/timerSlice';

interface Props {
    initialValue?: number;
}

export const Main: React.FC<Props> = () => {
    const mainContent = classNames(
        styles.main__content,
        'flex align-items-center justify-content-center w-50'
    );
    const dispatch = useDispatch();

    return (
        <>
            <div className={mainContent}>
                <Time />
                <UiButton
                    variant="contained"
                    color="primary"
                    style={{
                        borderRadius: '50%',
                        width: '200px',
                        height: '200px',
                    }}
                    type="button"
                    disabled={false}
                    children={'start'}
                    onClick={() => {
                        dispatch(startTime());
                    }}
                />
                <UiButton
                    variant="contained"
                    color="default"
                    style={{
                        borderRadius: '50%',
                        width: '200px',
                        height: '200px',
                    }}
                    type="button"
                    disabled={false}
                    children={'stop'}
                    onClick={() => {
                        dispatch(stopTime());
                    }}
                />
                <UiButton
                    onClick={() => {
                        dispatch(resetTime());
                    }}
                    disabled={false}
                    children={'reset'}
                    type={'button'}
                    variant="contained"
                    color="secondary"
                />
            </div>
        </>
    );
};
