import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
      const post = await prisma.post.update({
        where: {
          id: Number(req.query.id),
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: {
          ...req.body,
        },
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: '投稿の更新に失敗しました。' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}