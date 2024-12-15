import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'password',
      credentials: {
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, _request) {
        if (credentials?.password == process.env.SITE_PASSWORD) {
          return { id: '0' };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: 'thisisasecret',
})