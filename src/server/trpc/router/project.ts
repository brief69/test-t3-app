import { initTRPC } from '@trpc/server';
import type { Context } from '../../context'; // Contextの型を適切にインポート

const t = initTRPC.context<Context>().create(); // Context型を使用してtRPCを初期化

// prismaクライアントのインスタンスを作成

const projectRouter = t.router({
  getProjects: t.procedure.query(async ({ ctx }) => {
    // ctxからprismaクライアントを使用してデータを取得
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await ctx.prisma.user.findMany();
    // 修正: 'project' ではなく、正しいモデル名を使用してください。例えば 'user' など
  }),
});

// projectRouterをエクスポート
export default projectRouter;