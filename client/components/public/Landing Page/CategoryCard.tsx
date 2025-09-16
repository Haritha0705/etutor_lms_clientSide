"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image, {StaticImageData} from "next/image";

export type CategoryCardProps = {
    bgColour: string;
    img: string | StaticImageData,
    imgBgColour: string;
    text: string;
    courseCount: string;
};

const CategoryCard = ({
                          bgColour,
                          img,
                          imgBgColour,
                          text,
                          courseCount,
                      }: CategoryCardProps) => {
    return (
        <Card
            className={`${bgColour} w-full md:w-[320px] lg:w-80 shadow-md rounded-xl transition-transform hover:scale-105 p-0`}
        >
            <CardContent className="flex items-center gap-4 sm:gap-5 p-3 sm:p-4">
                <div
                    className={`${imgBgColour} flex justify-center items-center rounded-md w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16`}
                >
                    <Image src={img} className="w-8 h-8" alt={`${text} icon`} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                        {text}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                        {courseCount} Courses
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
