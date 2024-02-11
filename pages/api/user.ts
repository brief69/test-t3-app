import { type NextApiRequest, type NextApiResponse } from 'next'; // Next.jsの型をインポートします。Import types from Next.js.
import { PrismaClient } from '@prisma/client'; // Prismaクライアントをインポートします。Import Prisma Client.

const prisma = new PrismaClient(); // Prismaクライアントのインスタンスを作成します。Create an instance of Prisma Client.

// APIのハンドラー関数を定義します。Define the API handler function.
export default async function handler(
  req: NextApiRequest, // リクエストオブジェクト。The request object.
  res: NextApiResponse // レスポンスオブジェクト。The response object.
) {
  try {
    const users = await prisma.user.findMany(); // ユーザーのリストを取得します。Fetch the list of users.
    res.status(200).json(users); // 成功した場合、200ステータスとユーザーデータを返します。On success, return 200 status and user data.
  } catch (error) {
    res.status(500).json({ message: 'サーバーエラーが発生しました。' }); // エラーが発生した場合、500ステータスとエラーメッセージを返します。On error, return 500 status and an error message.
  }
}