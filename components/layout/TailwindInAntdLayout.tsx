"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";

const TailwindInAntdLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AntdRegistry>
      <StyleProvider layer> {children}</StyleProvider>
    </AntdRegistry>
  );
};

export default TailwindInAntdLayout;
