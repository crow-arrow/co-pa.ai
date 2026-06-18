import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { get } from "@vercel/edge-config"

export async function middleware(request: NextRequest) {
  try {
    const isMaintenance = await get<boolean>("maintenanceMode")

    if (isMaintenance) {
      return NextResponse.rewrite(new URL("/maintenance", request.url))
    }
  } catch (error) {
    console.error("Edge Config Error:", error)
  }

  if (
    request.nextUrl.pathname === "/admin" ||
    (request.nextUrl.pathname.startsWith("/admin/") && !request.nextUrl.pathname.startsWith("/admin/login"))
  ) {
    const adminSession = request.cookies.get("admin-session")

    if (!adminSession || adminSession.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)"],
}
