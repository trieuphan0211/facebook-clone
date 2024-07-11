import { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";
import nodemailer from "next-auth/providers/nodemailer";

export default {
  providers: [google],
  pages: {
    signIn: "/auth/signin",
  },
} satisfies NextAuthConfig;
