"use client";
import { useTranslation } from "@/i18n/client";
import { languages } from "@/i18n/settings";
import { Select, Typography } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Trans } from "react-i18next/TransWithoutContext";

interface FooterProps {
  language: string;
}
export const Footer = ({ language }: FooterProps) => {
  const { Paragraph } = Typography;
  const { t } = useTranslation(language, "footer");
  const pathname = usePathname();
  const route = useRouter();
  console.log("Footer pathname", pathname);
  return (
    <footer className="  px-40 py-5 bg-white w-full flex items-center justify-center">
      <div className="w-[900px] flex items-center justify-between">
        <Paragraph className="m-0">Stephen Phan © 2024</Paragraph>
        <Select
          defaultValue={language}
          onChange={(value) => {
            console.log("Changing language to", value);
            route.push(pathname.replace(`/${language}`, `/${value}`));
          }}
          style={{ width: 120 }}
          options={[
            { value: "en-US", label: "English" },
            { value: "vi-VN", label: "Tiếng Việt" },
          ]}
        />
      </div>
    </footer>
  );
};
