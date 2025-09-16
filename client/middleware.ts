import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const PUBLIC_PATHS = ["/login", "/register","/","/courses","/about","/contact","/become_an_instructor","/career"];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (PUBLIC_PATHS.includes(pathname)) {
        return NextResponse.next();
    }

    const token = req.cookies.get("accessToken")?.value || '';

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!) as {
            userId: string;
            email: string;
            role: string;
        };

        // only admin
        if (pathname.startsWith("/student") && decoded.role !== "student") {
            return NextResponse.redirect(new URL("/403", req.url)); // Forbidden page
        }

        if (pathname.startsWith("/admin") && decoded.role !== "admin") {
            return NextResponse.redirect(new URL("/403", req.url)); // Forbidden page
        }

        if (pathname.startsWith("/instructor") && decoded.role !== "instructor") {
            return NextResponse.redirect(new URL("/403", req.url));
        }

        return NextResponse.next();
    } catch (err) {
        console.error("JWT verification failed:", err);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    runtime: 'nodejs',
    matcher: ["/((?!_next|favicon.ico).*)"], // apply to all routes except _next static files
};
