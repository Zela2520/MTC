import { useState } from 'react';
import { Button } from '@mui/material';
import styles from './Times.module.scss';
import classNames from 'classnames';

export const Timer = () => {
    const [timer, setTimer] = useState(0);
    const buttonOnClick = () => {
        setTimer(timer + 1);
    };
    const timerClasses = classNames(
        styles.timer,
        'timer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    );

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                className={timerClasses}
                onClick={buttonOnClick}
            >
                {timer}
            </Button>
        </>
    );
};
