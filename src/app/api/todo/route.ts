import type { NextApiRequest, NextApiResponse } from 'next';

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  res.json({ message: 'Hello from the backend!' });
}