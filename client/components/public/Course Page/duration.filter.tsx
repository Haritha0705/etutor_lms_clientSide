import React from 'react';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {DurationsFilter} from "@/enum/category.enum";

const DurationFilter = () => {
    return (
        <>
            {DurationsFilter.map((duration, durationIndex) => (
                <div
                    key={durationIndex}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                    >
                        <Label
                            htmlFor={`duration-${durationIndex}`}
                            className={`flex items-center text-md pl-2 cursor-pointer 
                            }`}
                        >
                            <Input
                                type="checkbox"
                                className="mr-2 w-4 h-4"
                            />
                            {duration.key}
                        </Label>
                    </div>
                    <span className="text-sm">{duration.label}</span>
                </div>
            ))}
        </>
    );
};

export default DurationFilter;