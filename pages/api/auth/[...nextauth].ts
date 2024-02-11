import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

// 環境変数から値を読み込み、未定義の場合はエラーを投げる関数
const getEnv = (key: string): string => {
  const value = process.env[key];
  if (typeof value === 'undefined') {
    throw new Error(`${key} is not defined in .env.local`);
  }
  return value;
};

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: getEnv("GOOGLE_CLIENT_ID"),
      clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
    }),
    GitHubProvider({
      clientId: getEnv("GITHUB_CLIENT_ID"),
      clientSecret: getEnv("GITHUB_CLIENT_SECRET"),
    }),
  ],
})