"use client";
import { Button } from "antd";
import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/",
        })
      }
    >
      Sign In
    </Button>
  );
}
