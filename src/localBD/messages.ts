import { IMessage } from '../types/message';

export const messages: Promise<IMessage[]> = new Promise((resolve) => {
    resolve([
        {
            body: 'Привет, я хочу чтобы ты дорожил временем',
        },
        {
            body: 'Do it, just do it!',
        },
        {
            body: 'Don’t let your dreams be dreams',
        },
        {
            body: 'Yesterday you said tomorrow.',
        },
        {
            body: 'So just do it!',
        },
        {
            body: 'Make your dreams come true.',
        },
        {
            body: 'Just do it.',
        },
    ]);
});
