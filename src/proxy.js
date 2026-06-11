import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/web-next-admin-login", request.url));
}

export const config = {
  matcher: ["/web-next-admin", "/web-next-admin-signup"],
};
