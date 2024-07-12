"use client";
import { SigninForm as SigninFormProps } from "@/interfaces/auth/signin";
import GoogleLogo from "@/public/images/logo/google-logo.svg";
import { defaultValidateMessages } from "@/validates/default";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const onFinish: FormProps<SigninFormProps>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<SigninFormProps>["onFinishFailed"] = (
  errorInfo
) => {
  console.log("Failed:", errorInfo);
};
const signinWithGoogle = (provider: string) =>
  signIn(provider, {
    callbackUrl: "/",
  });
const SigninForm: React.FC = () => {
  return (
    <>
      <Form
        className="mb-4"
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        validateMessages={defaultValidateMessages}
      >
        <Form.Item<SigninFormProps>
          // label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Email address or phone number"
            className="rounded-md py-4 p-[14px] text-[17px] font-medium"
          />
        </Form.Item>

        <Form.Item<SigninFormProps>
          // label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Password"
            className="rounded-md py-4 p-[14px] text-[17px] font-medium"
          />
        </Form.Item>

        <Form.Item className="m-0">
          <Button
            type="primary"
            htmlType="submit"
            className="p-4 text-xl w-full h-12 font-bold"
          >
            Login
          </Button>
        </Form.Item>
        <Form.Item className="my-4">
          <Link
            href={"/forgot"}
            className="text-center block text-base hover:underline"
          >
            Forgotten password?
          </Link>
        </Form.Item>
        <hr />
      </Form>
      <Button
        className="p-4 text-xl w-full h-12 font-medium"
        icon={<Image src={GoogleLogo} alt="Google Logo" />}
        iconPosition="start"
        onClick={() => signinWithGoogle("google")}
      >
        Signin with Google
      </Button>
    </>
  );
};

export default SigninForm;
