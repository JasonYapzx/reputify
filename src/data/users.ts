import { User } from '../types/User';

export const users: User[] = [
    {
        id: "0x1F036464Cb012245C16a4c5f650C0f520D5b7854",
        name: 'Alice',
        email: 'abc@123.com',
        bio: 'Software engineer and blockchain enthusiast.',
        avatarUrl: '/avatars/alice.png',
        votes: { 1: { type: 1, stake: 20 } },
        saved: []
    },
    {
        id: "0x1F036464C3nd8a63C16a4c5f650C0f520D5b7854",
        name: 'Bob',
        email: 'abc@123.com',
        bio: 'Full-stack developer and coffee lover.',
        avatarUrl: '/avatars/bob.png',
        votes: {},
        saved: []
    },
    {
        id: "0xb88131667c832B0ad8182f80FbA20D3e1143224b",
        name: 'Shaune Ang',
        email: 'abc@123.com',
        bio: 'Software engineer and blockchain enthusiast.',
        avatarUrl: '/avatars/alice.png',
        votes: { 1: { type: 1, stake: 20 }, 0: { type: -1, stake: 20 } },
        saved: []
    },
    // Add more users as needed
];