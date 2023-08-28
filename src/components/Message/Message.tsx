import React, { useEffect, useState } from 'react';
import styled from './Message.module.scss';
import { IMessage } from '@/types/message';
import { messages } from '../../localBD/messages';

interface Props {
    delay: number;
    initialValue?: string;
}

export const Message: React.FC<Props> = ({ delay }) => {
    const [data, setMessages] = useState<IMessage[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const comments = await messages;
                setMessages(comments);
            } catch (err) {
                console.error('Ошибка при получении сообщения', err);
            }
        })();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const timer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, delay);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [data, currentIndex]);

    return (
        <>
            <span className={styled.message}>{data[currentIndex]?.body}</span>
        </>
    );
};
