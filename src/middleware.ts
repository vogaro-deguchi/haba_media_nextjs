import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: "/:path*",
};

export function middleware(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    const basicAuth = req.headers.get("authorization");
    const url = req.nextUrl;
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      if (
        user === process.env.BASIC_USERNAME &&
        pwd === process.env.BASIC_PASSWORD
      ) {
        return NextResponse.next();
      }
    }
    url.pathname = "/app/api/auth";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
