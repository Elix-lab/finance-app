import NextAuth from "next-auth";
import { User } from "next-auth";
import Google from "next-auth/providers/google";
import { getUserByEmail, createUser } from "./data/user";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    maxAge: 60 * 20, //20 minutes
    updateAge: 60 * 5, //every 5 minutes
  },

  callbacks: {
    authorized: async ({ auth }: { auth: any }) => {
      return !!auth?.user?.id;
    },
    async signIn({ user }: { user: any }) {
      try {
        if (!user.email) {
          return false;
        }
        const existingUser = await getUserByEmail(user.email);

        if (!existingUser) {
          await createUser({
            name: user.name ?? undefined,
            email: user.email,
            image: user.image ?? undefined,
          });
        }

        return true;
      } catch (err) {
        console.error(`[auth][signIn] error: ${err}`);
        return false;
      }
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user?.email) {
        try {
          const existingUser = await getUserByEmail(user.email);
          if (!existingUser) {
            console.error(
              `[auth][JWT] no user found by the email: ${user.email}`,
            );
            return token;
          }

          token.id = existingUser.id;
        } catch (err) {
          console.error(`[auth][JWT] error: ${err}`);
        }
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
