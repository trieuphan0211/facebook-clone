import { cookieName, languages } from "@/i18n/settings";
import { match } from "@formatjs/intl-localematcher";
import Negotiator, { Headers } from "negotiator";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);
export default auth(async (req) => {
  return;
});

// Function to get the preferred locale
function getLocale(request: NextRequest): string {
  const headers = {
    "accept-language": request.cookies.get(cookieName)?.value || "",
  };
  const negotiator = new Negotiator({ headers });
  const locales = negotiator.languages();
  const defaultLocale = "en-US";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // Check if the request is for a static file
  const staticFilePattern = /\.(?:png|jpg|jpeg|gif|ico|svg|css|js|map|json)$/i;
  if (staticFilePattern.test(pathname)) {
    return; // Do nothing if it's a request for a static file
  }
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
