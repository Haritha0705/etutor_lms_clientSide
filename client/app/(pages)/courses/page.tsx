"use client";

import React, { useState } from "react";
import { useCourse } from "@/hooks/useCourse";
import {DurationFilter, LevelFilter, MainFilter, PriceFilter, RatingFilter} from "@/enum/category.enum";
import { useCategories, useTools } from "@/hooks/useFilter";
import CategoriesFilter from "@/components/public/Course Page/categories.filter";
import TopFilters from "@/components/public/Course Page/topFilters";

import CoursesCard from "@/components/public/Landing Page/cards/CoursesCards";
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ToolFilter from "@/components/public/Course Page/tool.filter";
import ToolsFilter from "@/components/public/Course Page/tool.filter";

const Courses = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [openSub, setOpenSub] = useState<number | null>(null);
    const [openTool, setOpenTool] = useState<number | null>(null);
    const [clickCount, setClickCount] = useState(0);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);

    const { data: allCourses, error, isLoading, isFetching } = useCourse({
        page,
        limit: 8,
        categories: selectedCategories,
        tools: selectedTools,
    });

    const { data: subCategories } = useCategories();
    const { data: tools } = useTools();

    const toggleSub = (index: number) => setOpenSub(openSub === index ? null : index);
    const toggleTool = (index: number) => setOpenTool(openTool === index ? null : index);

    if (error) return <p className="text-red-500">Error: {error.message}</p>;

    const totalPages = allCourses?.meta?.totalPages || 1;

    return (
        <div className="pb-2 px-10 w-full">
            {/* Top Filters */}
            <TopFilters
                filterCount={clickCount}
                suggestion="UI/UX Design"
                resultsCount={allCourses?.meta?.totalCount || 0}
                keyword="UI/UX Design"
                isVisible={isVisible}
                onToggle={() => setIsVisible(!isVisible)}
            />

            <div className="flex gap-6">
                {/* Filter Sidebar */}
                {isVisible && (
                    <div className="w-64 flex-shrink-0 h-auto max-h-[calc(100vh-200px)] overflow-y-auto">
                        {MainFilter.map((category, index) => (
                            <div key={index} className="mb-2 border overflow-hidden shadow-sm rounded">
                                <Button
                                    onClick={() => toggleSub(index)}
                                    className="bg-white w-full text-left flex items-center justify-between py-6 px-4 rounded hover:bg-gray-100 focus:outline-none"
                                >
                                    <span className="text-black text-xl">{category.label}</span>
                                    {openSub === index ? (
                                        <ChevronUp className="!w-6 !h-6 text-black" />
                                    ) : (
                                        <ChevronDown className="!w-6 !h-6 text-black" />
                                    )}
                                </Button>

                                {openSub === index && (
                                    <div>
                                        {index === 0 && (
                                            <CategoriesFilter
                                                subCategories={subCategories}
                                                setCount={setClickCount}
                                                selectedCategories={selectedCategories}
                                                setSelectedCategories={setSelectedCategories}
                                            />
                                        )}
                                        {index === 1 && tools && tools.length > 0 && (
                                                <ToolsFilter
                                                    tools={tools}
                                                    setCount={setClickCount}
                                                    selectedTools={selectedTools}
                                                    setSelectedTools={setSelectedTools}
                                                />
                                        )}
                                        {index === 2 && tools && tools.length > 0 && (
                                            <>
                                                {RatingFilter.map((rating, ratingIndex) => (
                                                    <div
                                                        key={ratingIndex}
                                                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                    >
                                                        <div
                                                            className="flex items-center space-x-2 cursor-pointer"
                                                            onClick={() => toggleTool(ratingIndex)}
                                                        >
                                                            <Label
                                                                htmlFor={`rating-${ratingIndex}`}
                                                                className={`flex items-center text-md pl-2 cursor-pointer ${
                                                                    openTool === ratingIndex ? "text-orange-500" : "text-gray-800"
                                                                }`}
                                                            >
                                                                <Input
                                                                    type="checkbox"
                                                                    className="mr-2 w-4 h-4"
                                                                    id={`rating-${ratingIndex}`}
                                                                    checked={selectedTools.includes(rating.name)}
                                                                    onChange={() => handleToolSelect(rating.name)}
                                                                />
                                                                {rating.name}
                                                            </Label>
                                                        </div>
                                                        <span className="text-sm">{rating.coursesCount}</span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                        {index === 3 && tools && tools.length > 0 && (
                                            <>
                                                {LevelFilter.map((level, levelIndex) => (
                                                    <div
                                                        key={levelIndex}
                                                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                    >
                                                        <div
                                                            className="flex items-center space-x-2 cursor-pointer"
                                                            onClick={() => toggleTool(levelIndex)}
                                                        >
                                                            <Label
                                                                htmlFor={`level-${levelIndex}`}
                                                                className={`flex items-center text-md pl-2 cursor-pointer ${
                                                                    openTool === levelIndex ? "text-orange-500" : "text-gray-800"
                                                                }`}
                                                            >
                                                                <Input
                                                                    type="checkbox"
                                                                    className="mr-2 w-4 h-4"
                                                                    id={`level-${levelIndex}`}
                                                                    checked={selectedTools.includes(level.name)}
                                                                    onChange={() => handleToolSelect(level.name)}
                                                                />
                                                                {level.name}
                                                            </Label>
                                                        </div>
                                                        <span className="text-sm">{level.coursesCount}</span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                        {index === 4 && tools && tools.length > 0 && (
                                            <>
                                                {PriceFilter.map((price, priceIndex) => (
                                                    <div
                                                        key={priceIndex}
                                                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                    >
                                                        <div
                                                            className="flex items-center space-x-2 cursor-pointer"
                                                            onClick={() => toggleTool(priceIndex)}
                                                        >
                                                            <Label
                                                                htmlFor={`price-${priceIndex}`}
                                                                className={`flex items-center text-md pl-2 cursor-pointer ${
                                                                    openTool === priceIndex ? "text-orange-500" : "text-gray-800"
                                                                }`}
                                                            >
                                                                <Input
                                                                    type="checkbox"
                                                                    className="mr-2 w-4 h-4"
                                                                    id={`price-${priceIndex}`}
                                                                    checked={selectedTools.includes(price.name)}
                                                                    onChange={() => handleToolSelect(price.name)}
                                                                />
                                                                {price.name}
                                                            </Label>
                                                        </div>
                                                        <span className="text-sm">{price.coursesCount}</span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                        {index === 5 && tools && tools.length > 0 && (
                                            <>
                                                {DurationFilter.map((duration, durationIndex) => (
                                                    <div
                                                        key={durationIndex}
                                                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                    >
                                                        <div
                                                            className="flex items-center space-x-2 cursor-pointer"
                                                            onClick={() => toggleTool(durationIndex)}
                                                        >
                                                            <Label
                                                                htmlFor={`duration-${durationIndex}`}
                                                                className={`flex items-center text-md pl-2 cursor-pointer ${
                                                                    openTool === durationIndex ? "text-orange-500" : "text-gray-800"
                                                                }`}
                                                            >
                                                                <Input
                                                                    type="checkbox"
                                                                    className="mr-2 w-4 h-4"
                                                                    id={`duration-${durationIndex}`}
                                                                    checked={selectedTools.includes(duration.name)}
                                                                    onChange={() => handleToolSelect(duration.name)}
                                                                />
                                                                {duration.name}
                                                            </Label>
                                                        </div>
                                                        <span className="text-sm">{duration.coursesCount}</span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Course Cards Grid */}
                <div className={`grid gap-6 ${isVisible ? "grid-cols-4" : "grid-cols-5"} w-full`}>
                    {isLoading ? (
                        <p className="col-span-full text-center text-lg">Loading courses...</p>
                    ) : allCourses?.data.length > 0 ? (
                        allCourses?.data?.map((course, index) => (
                            <div key={index}>
                                <CoursesCard
                                    category={course.category?.name}
                                    text={course.description}
                                    price={course.price}
                                    rating={course.averageRating}
                                    studentCount={course.enrollmentCount}
                                    lgDisplay={isVisible ? "lg:w-[322px]" : "lg:w-[308px]"}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg">No courses found.</p>
                    )}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-4 gap-2 items-center">
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className={`p-2 rounded ${page === 1 ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                    >
                        <ArrowLeft />
                    </button>

                    <span>Page {page} of {totalPages}</span>

                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                        className={`p-2 rounded ${page === totalPages ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                    >
                        <ArrowRight />
                    </button>
                    {isFetching && <span className="ml-3 text-sm text-gray-500">Refreshing...</span>}
                </div>
            )}
        </div>
    );
};

export default Courses;
