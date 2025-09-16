// components/footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Button
} from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
    ArrowRight
} from "lucide-react"; // use lucide icons for social/app store

export default function Footer() {
    const socialIcons = [Facebook, Instagram, Linkedin, Twitter, Youtube];

    return (
        <>
            <footer className="bg-gray-900 w-full relative flex px-16 py-12 flex-wrap gap-10">
                {/* Top border */}
                <div className="absolute w-full h-[0.5px] bg-gray-100/30 top-0 left-0" />
                <div className="absolute w-full h-[0.5px] bg-gray-100/30 bottom-0 left-0" />

                {/* Left section */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="flex items-center gap-5 text-white">
                        {/*<Image src={""} alt="E-tutor logo" className="w-12 h-12" />*/}
                        <p className="text-3xl font-semibold">E-tutor</p>
                    </div>
                    <p className="text-gray-500 max-w-xs">
                        Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
                    </p>
                    <div className="flex gap-5">
                        {socialIcons.map((Icon, idx) => (
                            <Button
                                key={idx}
                                variant="ghost"
                                className="bg-gray-300/30 w-10 h-10 flex items-center justify-center p-0"
                            >
                                <Icon className="w-5 h-5 text-gray-900" />
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Right section links */}
                <div className="flex gap-16 flex-wrap text-white">
                    <div className="flex flex-col gap-3">
                        <h4>Top 4 Category</h4>
                        <p className="text-gray-500 text-sm">Development</p>
                        <p className="text-gray-500 text-sm">Finance & Accounting</p>
                        <p className="text-gray-500 text-sm">Design</p>
                        <p className="text-gray-500 text-sm">Business</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4>Quick Links</h4>
                        <Link href="/about" className="text-gray-500 text-sm">About</Link>
                        <Link href="/become-an-instructor" className="text-gray-500 text-sm flex items-center gap-1 relative">
                            Become Instructor <ArrowRight className="w-4 h-4" />
                            <div className="w-full absolute h-[1px] bg-orange-500 bottom-[-5px] left-0" />
                        </Link>
                        <Link href="/contact" className="text-gray-500 text-sm">Contact</Link>
                        <Link href="/career" className="text-gray-500 text-sm">Career</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4>Support</h4>
                        <p className="text-gray-500 text-sm">Help Center</p>
                        <p className="text-gray-500 text-sm">FAQs</p>
                        <p className="text-gray-500 text-sm">Terms & Condition</p>
                        <p className="text-gray-500 text-sm">Privacy Policy</p>
                    </div>
                </div>
            </footer>

            {/* Bottom section */}
            <div className="py-5 px-16 bg-gray-900 flex flex-wrap gap-5 items-center justify-between">
                <p className="text-gray-400 text-sm">
                    © 2021 - Eduflex. Designed by <span className="text-white">Templatecookie</span>. All rights reserved.
                </p>

                {/* Language selector using shadcn/ui Select */}
                <Select>
                    <SelectTrigger className="w-44 bg-gray-900 text-white border border-gray-700">
                        <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    );
}
