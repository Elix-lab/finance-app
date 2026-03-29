import NextAuth from "next-auth";
import { User } from "next-auth";
import Google from "next-auth/providers/google";
import { getUserByEmail, createUser } from "./data-service";

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
        console.log("SIGN IN USUARIO:", user);
        if (!user.email) {
          return false;
        }
        const existingUser = await getUserByEmail(user.email);
        console.log("EXISTING USER:", existingUser);

        if (!existingUser) {
          await createUser({
            name: user.name ?? undefined,
            email: user.email,
            image: user.image ?? undefined,
          });
          console.log("CREATED USER:", createUser);
        }

        return true;
      } catch (err) {
        console.error("SIGNIN ERROR:", err);
        return false;
      }
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
