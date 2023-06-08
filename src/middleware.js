// "use client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// const data = localStorage.getItem("isUserLogIn");

export function middleware(NextRequest) {
  let cookie = NextRequest.cookies.get("isUserLogIn")?.value;
  console.log("Here is call the collies data", cookie);
  if (!cookie && NextRequest.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/login", NextRequest.url));
  }
  if (cookie && NextRequest.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.rewrite(new URL("/", NextRequest.url));
  }
}
