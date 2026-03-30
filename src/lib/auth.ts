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

  callbacks: {
    authorized: async ({ auth }: { auth: any }) => {
      return !!auth?.user;
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
        return false;
      }
    },
    async session({ session }: { session: any }) {
      const existingUser = await getUserByEmail(session.user.email);
      session.user.existingId = existingUser.id;
      return session;

      maxAge: 60; //20 minutes
      updateAge: 60 * 5; //every 5 minutes
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
