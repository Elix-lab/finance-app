import NextAuth from "next-auth";
import { User } from "next-auth";
import Google from "next-auth/providers/google";
import { getUserByEmail } from "./data-service";

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
    async signIn({ user }: { user: User }) {
      try {
        if (!user?.email) {
          return false;
        }
        const existingUser = await getUserByEmail(user.email);
        return true;
      } catch {
        return false;
      }
    },
    pages: {
      signIn: "/signIn",
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
