import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    try {
      const post = await prisma.post.delete({
        where: {
          id: Number(req.query.id),
        },
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: '投稿の削除に失敗しました。' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}