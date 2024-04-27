import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";

import { env } from "@/env";
import { db } from "@/server/db";
import { createTable } from "@/server/db/schema";
import { getRandomValues } from "crypto";
import { createTransport } from "nodemailer";
import { myHtml, myText } from "@/helpers/email";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
type UserRole = "admin" | "maintainer" | "organization" | "standard";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
      // ...other properties
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        role: user.role,
      },
    }),
  },
  session: {
    maxAge: 1 * 24 * 60 * 60, // 1 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  adapter: DrizzleAdapter(db, createTable) as Adapter,
  pages: {
    signIn: "/login",
    verifyRequest: "/login/verify-email",
    error: "/login/error",
  },
  providers: [
    EmailProvider({
      // from: "suporte@plateaid.biz",
      from: "plateaid404@gmail.com",
      maxAge: 10 * 60,
      generateVerificationToken: async () => {
        const random = getRandomValues(new Uint8Array(8));

        return Buffer.from(random).toString("hex").slice(0, 6);
      },
      async sendVerificationRequest({
        identifier,
        provider,
        url,
        expires,
        theme,
        token,
      }) {
        const transport = createTransport({
          host: env.SMTP_HOST,
          port: env.SMTP_PORT,
          // secure: true,
          auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
          },
        });

        const result = await transport.sendMail({
          to: identifier,
          // from: `PlateAid <suporte@plateaid.biz>`,
          from: `PlateAid <plateaid404@gmail.com>`,
          subject: "Login PlateAid",
          text: myText({ url }),
          html: myHtml({ url, theme, token }),
        });

        const failed = result.rejected.concat(result.pending).filter(Boolean);

        if (failed.length) {
          throw new Error(`Failed to send email to ${failed.join(", ")}`);
        }
      },
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
