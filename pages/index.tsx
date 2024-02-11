// Next.jsとPrismaクライアントをインポートします。
// Import Next.js and Prisma Client.
import { type GetServerSideProps } from 'next';
import { PrismaClient, type User } from '@prisma/client';

// Prismaクライアントのインスタンスを作成します。
// Create an instance of Prisma Client.
const prisma = new PrismaClient();

// サーバーサイドで実行される関数をエクスポートします。この関数は、ユーザーのデータを取得してpropsとして返します。
// Export a function that runs on the server side. This function fetches user data and returns it as props.
export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: { users },
  };
};

// Homeコンポーネントのpropsの型を定義します。
// Define the type for the props of the Home component.
interface HomeProps {
  users: User[];
}

// Homeコンポーネントを定義し、受け取ったユーザーのデータを表示します。
// Define the Home component and display the received user data.
export default function Home({ users }: HomeProps) {
  return (
    <div>
      {/* ユーザーのデータをマッピングして表示します。 */}
      {/* Map and display user data. */}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}