import { auth, signIn, signOut } from "@/auth";
import { SignIn } from "@/components/auth/signin-button";
import { Button } from "antd";
import React from "react";

const SignInPage = async () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <SignIn />
        <button type="submit">Signin with Google</button>
      </form>
    </>
  );
};

export default SignInPage;
