import { NextApiRequest, NextApiResponse } from 'next';

import { posts } from '../../../data/posts';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // get all posts??
    res.status(200).json({ data: posts });
  } else if (req.method === 'POST') {
    console.log('Submit post to backend')
    res.status(201).json({ data: posts[0] });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}