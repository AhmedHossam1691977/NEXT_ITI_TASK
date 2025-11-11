import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
console.log(request.cookies.get("token"));


  const protectedPaths = ["/about", "/product", "/category"];

  const pathname = request.nextUrl.pathname;


  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));


  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }


  const isAuthPage = ["/login", "/register"].includes(pathname);
  if (token && isAuthPage) {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/about/:path*",
    "/product/:path*",
    "/category/:path*",
    "/login",
    "/register",
  ],
};
