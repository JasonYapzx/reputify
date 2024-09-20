import { NextApiRequest, NextApiResponse } from 'next';

import { users } from '../../../data/users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    console.log('REACHED USER')
    res.status(200).json({ data: users[0] });
  } else if (req.method === 'POST') {
    console.log('REGISTER USER??')
    res.status(201).json({ data: users[0] });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}