import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Star} from "lucide-react";
import {LevelsFilter} from "@/enum/category.enum";

const LevelFilter = () => {
    return (
        <>
            {LevelsFilter.map((rating, ratingIndex) => (
                <div
                    key={ratingIndex}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                    >
                        <Label
                            htmlFor={`rating-${ratingIndex}`}
                            className={`flex items-center text-md pl-2 cursor-pointer 
                            }`}
                        >
                            <Input
                                type="checkbox"
                                className="mr-2 w-4 h-4"

                            />
                            <Star className={'bg-orange-500'}/>
                            {rating.key}
                        </Label>
                    </div>
                    <span className="text-sm">{rating.label}</span>
                </div>
            ))}
        </>
    );
};

export default LevelFilter;