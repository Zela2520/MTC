import { IComment } from '../types/comment.ts';
const BACKEND_URL = 'https://jsonplaceholder.typicode.com/comments';

export async function getComments(): Promise<IComment[]> {
    const comments = await fetch(BACKEND_URL);
    return comments.json();
}
