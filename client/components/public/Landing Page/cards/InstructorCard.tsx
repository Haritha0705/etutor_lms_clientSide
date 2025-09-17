"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type InstructorCardProps = {
    img: string | StaticImageData;
    name: string;
    position: string;
    rating: string;
    studentCount: string;
};

const InstructorCard = ({
                            img,
                            name,
                            position,
                            rating,
                            studentCount,
                        }: InstructorCardProps) => {
    return (
        <Card className="w-full md:w-[220px] lg:w-[250px] shadow-xl overflow-hidden relative pt-0 pb-0 rounded-none">
            <div className="relative w-full h-[260px]">
                <Image
                    src={img}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                />
                <div className="absolute bg-gray-300 h-[1px] w-full top-[345px] left-0"></div>
            </div>
            <CardContent className="flex flex-col gap-4 px-4 pb-3">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-lg sm:text-base md:text-lg lg:text-xl font-medium leading-snug">
                        {name}
                    </p>
                    <p className="text-xs text-gray-500">{position}</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <p>{rating}</p>
                    </div>
                    <div className="flex gap-1">
                        <p>{studentCount}</p>
                        <span className="text-gray-500">students</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default InstructorCard;
