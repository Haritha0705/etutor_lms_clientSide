"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {Tool} from "@/types/course.types";

type ToolsProps = {
    tools?: Tool[];
    setCount: React.Dispatch<React.SetStateAction<number>>;
    selectedTools: string[];
    setSelectedTools: React.Dispatch<React.SetStateAction<string[]>>;
};

const ToolsFilter = ({
                         tools,
                         setCount,
                         selectedTools,
                         setSelectedTools,
                     }:ToolsProps) => {
    const [openTool, setOpenTool] = useState<number | null>(null);
    const toggleTool = (index: number) => setOpenTool(openTool === index ? null : index);

    const handleToolSelect = (toolName: string) => {
        setSelectedTools((prev) =>
            prev.includes(toolName)
                ? prev.filter((t) => t !== toolName)
                : [...prev, toolName]
        );
        setCount((c) => c + 1);
    };

    return (
        <>
            {tools?.map((tool, toolIndex) => (
                <div
                    key={toolIndex}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => toggleTool(toolIndex)}
                    >
                        <Label
                            htmlFor={`tool-${toolIndex}`}
                            className={`flex items-center text-md pl-2 cursor-pointer ${
                                openTool === toolIndex ? "text-orange-500" : "text-gray-800"
                            }`}
                        >
                            <Input
                                type="checkbox"
                                className="mr-2 w-4 h-4"
                                id={`tool-${toolIndex}`}
                                checked={selectedTools.includes(tool.name)}
                                onChange={() => handleToolSelect(tool.name)}
                            />
                            {tool.name}
                        </Label>
                    </div>
                    <span className="text-sm">{tool.coursesCount}</span>
                </div>
            ))}
        </>
    );
};

export default ToolsFilter;
