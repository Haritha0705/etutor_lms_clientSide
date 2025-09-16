"use client";

import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";
import Image, {StaticImageData} from "next/image";

type CoursesCardProps = {
    img: string | StaticImageData,
    category: string,
    text: string,
    categoryColour: string,
    categoryTextColour: string,
    price: string,
    rating: string,
    studentCount: string,
};

const CoursesCard = ({
                         img,
                         category,
                         text,
                         categoryColour,
                         categoryTextColour,
                         price,
                         rating,
                         studentCount,

                     }: CoursesCardProps) => {
    return (
        <Card className="w-full md:w-[305px] lg:w-[268px] shadow-xl overflow-hidden relative p-0 rounded-none">
            <div className="relative w-full h-48 sm:h-40 md:h-44 lg:h-52">
                <Image
                    src={img}
                    alt={`${text} course image`}
                    fill
                    className="object-cover"
                />
            </div>
            <CardContent className="flex flex-col gap-4 px-4">
                <div className="flex items-center justify-between">
                    <p className={`px-3 py-1 text-xs rounded ${categoryColour} ${categoryTextColour}`}>
                        {category}
                    </p>
                    <p className="text-orange-500 font-semibold">{price}</p>
                </div>

                <div>
                    <p className="text-[18px] font-medium leading-snug sm:text-sm md:text-[15px] lg:text-[18px]">
                        {text}
                    </p>
                    <div className="bg-gray-300 h-[1px] w-full mt-3"></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500"/>
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

export default CoursesCard;
