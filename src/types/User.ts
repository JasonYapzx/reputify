export interface User {
    id: string;
    name: string;
    email: string;
    bio: string;
    avatarUrl?: string;
    votes: { [postid: string]: Vote; };
    saved: number[];
}
