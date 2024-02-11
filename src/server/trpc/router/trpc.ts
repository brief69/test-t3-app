import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();

// その他のtRPC設定やユーティリティ関数