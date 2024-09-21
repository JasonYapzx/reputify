import { Post } from '../types/Post';


export const posts: Post[] = [
    {
        id: 0,
        title: 'First Post',
        content: 'This is the content of the first post.',
        author: 'Alice',
        user_id: "0x1F036464C3nd8a63C16a4c5f650C0f520D5b7854",
        token: "Ethereum",
        timeframe: "10 Days",
        prediction_value: 10,
        prediction_sign: -1,
        post_reputation: 10,
        upvotes: 120,
        downvotes: 40,
        score: 40,
    },
    {
        id: 1,
        title: 'Second Post',
        content: 'This is the content of the second post.',
        author: 'Bob',
        user_id: "0x1F036464C3nd8a63C16a4c5f650C0f520D5b7854",
        token: "Ethereum",
        timeframe: "10 Days",
        prediction_value: 10,
        prediction_sign: -1,
        post_reputation: 10,
        upvotes: 120,
        downvotes: 40,
        score: 0,
    },
];
