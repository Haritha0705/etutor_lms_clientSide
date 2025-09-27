"use client";

import React, { useState } from "react";
import { CategoryNames, CategoryStyles } from "@/enum/category.enum";
import { Category } from "@/types/course.types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type CoursesCardProps = {
    subCategories?: Category[];
    setCount: React.Dispatch<React.SetStateAction<number>>;
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoriesFilter = ({
                              subCategories,
                              setCount,
                              selectedCategories,
                              setSelectedCategories,
                          }: CoursesCardProps) => {
    const [openNested, setOpenNested] = useState<number | null>(null);

    const toggleNested = (index: number) =>
        setOpenNested(openNested === index ? null : index);

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories((prev) => {
            const updated = prev.includes(categoryId)
                ? prev.filter((c) => c !== categoryId)
                : [...prev, categoryId];
            setCount(updated.length);
            return updated;
        });
    };

    return (
        <>
            {subCategories?.map((sub, subIndex) => (
                <div key={subIndex} className="mb-1">
                    {sub.subCategories.length > 0 ? (
                        <>
                            <Button
                                onClick={() => toggleNested(subIndex)}
                                className="bg-white w-full text-left flex items-center justify-between p-2 text-gray-600 hover:bg-gray-50 focus:outline-none rounded-md transition-colors"
                            >
                                <span className="flex items-center text-md pl-2">
                                    {CategoryStyles[sub.name as CategoryNames]?.icon && (
                                        <span
                                            className={`mr-2 text-xl ${
                                                openNested === subIndex
                                                    ? "text-orange-500"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {
                                                CategoryStyles[sub.name as CategoryNames]
                                                    .icon
                                            }
                                        </span>
                                    )}
                                    <span className="text-gray-800">{sub.name}</span>
                                </span>
                                {openNested === subIndex ? (
                                    <ChevronUp className="w-6 h-6 text-black" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-black" />
                                )}
                            </Button>

                            {openNested === subIndex && (
                                <div>
                                    {sub.subCategories.map((nested, nestedIndex) => (
                                        <div
                                            key={nestedIndex}
                                            className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            <Label className="flex items-center text-sm pl-4 cursor-pointer">
                                                <Input
                                                    type={"checkbox"}
                                                    className={`mr-2 w-4 h-4`}
                                                    checked={selectedCategories.includes(
                                                        nested.name
                                                    )}
                                                    onChange={() =>
                                                        handleCategoryChange(nested.name)
                                                    }
                                                />
                                                {nested.name}
                                            </Label>
                                            <span className="text-sm">
                                                {nested.coursesCount}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mr-2 w-4 h-4 accent-orange-500 checked:text-white"
                                />
                                {sub.name}
                            </label>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default CategoriesFilter;
