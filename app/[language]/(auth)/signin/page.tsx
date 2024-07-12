import SigninForm from "@/components/auth/signin-form";
import { Footer } from "@/components/footer/Footer";
import { useTranslation } from "@/i18n";
import facebookLogo from "@/public/images/logo/facebook-logo.svg";
import Image from "next/image";
import Link from "next/link";

const SignInPage = async ({ params }: { params: { language: string } }) => {
  const { t } = await useTranslation(params.language, "signin");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[500px]">
        <Link href={"/"}>
          <Image
            alt="Facebook logo"
            src={facebookLogo}
            className="w-4/6 -ml-7"
          />
        </Link>
        <h1 className="leading-normal  text-[25px]">{t("title")}</h1>
      </div>
      <div className="w-[400px] bg-white p-4 rounded-lg shadow-md">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignInPage;
