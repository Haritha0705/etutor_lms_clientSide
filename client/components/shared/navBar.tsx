// components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Input
} from "@/components/ui/input";
import {
    Button
} from "@/components/ui/button";
import {
    Bell,
    Heart,
    ShoppingCart,
    GraduationCap,
    ChevronDown,
    Search
} from "lucide-react";

const NavBar = () => {
    const pathname = usePathname(); // active route
    const pages = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Become an Instructor", href: "/become-an-instructor" },
    ];

    return (
        <header className="fixed w-full top-0 left-0 right-0 shadow z-50">
            {/* Top Menu */}
            <ul className="flex flex-row gap-5 text-sm bg-black font-inter py-3 px-7">
                {pages.map((page) => (
                    <li key={page.name}>
                        <Link
                            href={page.href}
                            className={`${
                                pathname === page.href
                                    ? "text-white font-semibold"
                                    : "text-gray-400"
                            } hover:text-white transition`}
                        >
                            {page.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Main Navbar */}
            <div className="bg-white py-5 px-5 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex flex-row gap-6 items-center">
                    <div className="flex gap-2 items-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        <span className="text-3xl font-medium">E-tutor</span>
                    </div>

                    {/* Browse Dropdown (just styled input for now) */}
                    <div className="relative flex items-center">
                        <Input
                            placeholder="Browse"
                            className="w-44 pr-10 text-sm"
                        />
                        <ChevronDown className="w-5 absolute right-3 text-gray-400" />
                    </div>

                    {/* Search */}
                    <div className="relative flex items-center">
                        <Search className="w-5 absolute left-3 text-gray-400" />
                        <Input
                            placeholder="What do you want to learn?"
                            className="w-64 pl-10 text-sm"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex gap-5 items-center">
                    <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <Heart className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />

                    <Button variant="secondary" size="sm">
                        Create Account
                    </Button>
                    <Button size="sm">Sign In</Button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
