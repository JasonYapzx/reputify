
export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    user_id: string;
    token: string;
    timeframe: string;
    prediction_value: number;
    prediction_sign: number;
    post_reputation: number;
    upvotes: number;
    downvotes: number;
    score: number;
}

export interface PostFormDetails {
    user_id: number;
    token: string
    content: string;
    timeframe: number;
    prediction_value: number;
    prediction_sign: number;
}