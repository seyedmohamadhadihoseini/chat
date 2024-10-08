import { NextRequest, NextResponse } from "next/server";
import GetCurrentUser from "./services/getCurrrentUser";
export async function middleware(req: NextRequest) {
  const user = await GetCurrentUser();
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    if (user) return NextResponse.redirect(new URL("/chat", req.url));
  } else if (pathname.startsWith("/chat")) {
    if (!user) {
      const lastPart = pathname.split("/").pop();
      let lastUrl = "/login";
      if (lastPart !== "chat") {
        lastUrl = `/login?target=${lastPart}`;
      }
      return NextResponse.redirect(new URL(lastUrl, req.url));
    } else if (pathname.endsWith("/"))
      return NextResponse.redirect(new URL("/chat", req.url));
  }
  else if (pathname.endsWith("/")) {
    if (user) {
      return NextResponse.redirect(new URL("/chat", req.url));
    }
  }
}
export const config = {
  unstable_allowDynamic: [
    "/services/**",
    '/node_modules/function-bind/**',
  ]
}
