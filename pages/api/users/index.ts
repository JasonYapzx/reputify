import { NextApiRequest, NextApiResponse } from 'next';

import { users } from '../../../data/users';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     res.status(200).json({ data: posts });
//   } else if (req.method === 'POST') {
//     res.status(201).json({ data: posts[0] });
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }