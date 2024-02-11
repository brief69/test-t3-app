import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
// 他のプロバイダーも同様にインポート

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: "",
        clientSecret: ""
    }),
    // 他のプロバイダーもここに追加可能
  ],
  // その他のNextAuth設定
});