"use client";

import img from "../../../../public/image/aboutImg7.jpg"
import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";
import Image from "next/image";
import {CategoryNames, CategoryStyles} from "@/enum/category.enum";

type CoursesCardProps = {
    // img: string | StaticImageData,
    category: string,
    text: string,
    price?: number,
    rating: number,
    studentCount: number,
    lgDisplay?: string | null,
};

const CoursesCard = ({
                         // img,
                         category,
                         text,
                         price,
                         rating,
                         studentCount,
                         lgDisplay=null
                     }: CoursesCardProps) => {
    // const { categoryColour,categoryTextColour } = CategoryStyles[category as CategoryNames]
    const style = CategoryStyles[category as CategoryNames];

    const categoryColour = style?.categoryColour || "bg-gray-200";
    const categoryTextColour = style?.categoryTextColour || "text-gray-600";

    return (
        <Card className={`w-full ${lgDisplay ? lgDisplay : "lg:w-[315px]"} md:w-[305px] shadow-xl overflow-hidden relative p-0 rounded-none`}>
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
                    <p className="text-orange-500 font-semibold">{`$${price}`}</p>
                </div>

                <div>
                    <p className="text-[18px] font-medium leading-snug sm:text-sm md:text-[15px] lg:text-[14px] line-clamp-1">
                        {text}
                    </p>
                    <div className="bg-gray-300 h-[1px] w-full mt-3"></div>
                </div>

                <div className="flex items-center justify-between text-sm pb-3">
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
