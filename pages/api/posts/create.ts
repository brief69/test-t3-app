import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const post = await prisma.post.create({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: {
          ...req.body,
        },
      });
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: '投稿の作成に失敗しました。' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}