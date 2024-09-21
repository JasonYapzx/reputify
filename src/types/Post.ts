
export interface Post {
  id: number;
  user_id: number;
  content: string;
  author: string;
  title: string;
  token: string;
  timeframe: number; // seconds
  prediction_value: number;
  prediction_sign: number;
  post_reputation: number;
  // upvotes: number;
  // downvotes: number;
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