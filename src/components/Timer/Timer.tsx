import { createContext, useContext, useEffect, useState } from 'react';
import styles from './Timer.module.scss';
import classNames from 'classnames';
import { UiButton } from '../../uikit/Button/Button';
import { Time } from '../TimeDisplay/TimeDisplay';
import { TimerContext, TimerContextProvider } from '../Context/Context';

interface Props {
    initialValue: number;
}

export const Timer: React.FC<Props> = ({ initialValue }) => {
    const mainContent = classNames(
        styles.main__content,
        'flex align-items-center justify-content-center w-50'
    );

    const timerContext = useContext(TimerContext);

    useEffect(() => {
        let timer = 0;

        if (timerContext.isActive) {
            timer = setTimeout(() => {
                timerContext.incrementTime();
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [timerContext.isActive]);

    return (
        <>
            <TimerContextProvider>
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
                        onClick={timerContext?.startTimer}
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
                        onClick={timerContext?.stopTimer}
                    />
                    <UiButton
                        onClick={timerContext?.resetTimer}
                        disabled={false}
                        children={'reset'}
                        type={'button'}
                        variant="contained"
                        color="secondary"
                    />
                </div>
            </TimerContextProvider>
        </>
    );
};
