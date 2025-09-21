"use client";

import React, {useState} from "react";
import {ArrowBigDown, ArrowLeft, ArrowRight, Filter, Search} from "lucide-react";
import CoursesCard from "@/components/public/Landing Page/cards/CoursesCards";
import {useCourse} from "@/hooks/useCourse";
import {MainFilter} from "@/enum/category.enum";
import {useCategories} from "@/hooks/useFilter";
import CategoriesFilter from "@/components/public/Course Page/categories.filter";

const Courses = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [openSub, setOpenSub] = useState<number | null>(null);
    const [selectedToolIndex, setSelectedToolIndex] = useState<number | null>(null);


    const { data, error, isLoading, isFetching } = useCourse({
        page,
        limit: 10,
    });
    const { data: subCategories } = useCategories()

    if (isLoading) return <p>Loading courses...</p>;
    if (error) return <p className="text-red-500">Error: {error.message}</p>;

    const toggleSub = (index: number) => setOpenSub(openSub === index ? null : index);

    return (
        <div className="pb-20 px-8 w-full">
            {/* Top Filters */}
            <div className="relative">
                <div className="absolute w-full h-[0.1rem] bg-gray-400/30 bottom-5 left-0 right-0"></div>
                <div className="flex justify-between py-5">
                    <div className="flex gap-x-6">
                        <button
                            onClick={() => setIsVisible(!isVisible)}
                            className="flex items-center justify-between px-6 border w-[160px] h-[40px] text-base border-orange-500/30 text-orange-500 hover:bg-orange-100"
                        >
                            <Filter className="w-5 h-5 mr-2"/>
                            <span className="flex-1 text-left">Filter</span>
                            <span className="ml-2 bg-orange-500 w-6 h-6 flex items-center justify-center text-white text-[10px]">
                                {/*12 add number of filter count*/}
                                12
                            </span>
                        </button>
                        <div className="relative flex items-center">
                            <input
                                className="border pr-4 pl-10 py-2 rounded w-64 text-sm border-gray-200"
                                placeholder="UI/UX Design"
                            />
                            <Search className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <span>Sort by:</span>
                        <div className="relative flex items-center">
                            <input
                                className="border px-4 py-2 rounded w-44 pr-10 text-sm border-gray-400"
                                placeholder="Trending"
                            />
                            <ArrowBigDown className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-3 justify-between items-center pb-10">
                    <div className="flex gap-x-3">
                        <span className="text-gray-500">Suggestion:</span>
                        <p className="text-orange-500">test</p>
                    </div>
                    <p className="text-gray-500">
                        <span className="text-black">test</span> results found for{" "}
                        <span className="text-gray-500">test</span>
                    </p>
                </div>
            </div>

            <div className="flex gap-6">
                {/* Filter Sidebar */}
                {isVisible && (
                    <div className="w-64 flex-shrink-0 h-auto max-h-[calc(100vh-200px)] overflow-y-auto">
                        {MainFilter.map((category, index) => (
                            <div key={index} className="mb-2 border overflow-hidden shadow-sm rounded">
                                {/* Main Category Button */}
                                <button
                                    onClick={() => toggleSub(index)}
                                    className="w-full text-left flex items-center justify-between py-4 px-2 bg-white rounded hover:bg-gray-100 focus:outline-none"
                                >
                                    <span className="text-black text-xl">{category.label}</span>
                                    <svg
                                        className={`w-5 h-5 transform ${openSub === index ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Conditional content based on index */}
                                {openSub === index && (
                                    <div>
                                        {index === 0 && <CategoriesFilter subCategories={subCategories}/>}
                                        {index === 1 && (
                                            <>
                                                {tools?.map((tool, toolIndex) => (
                                                    <div key={toolIndex} className="mb-1">
                                                        <span className="flex items-center text-md pl-2">
                                                          <span
                                                              onClick={() => setSelectedToolIndex(toolIndex)}
                                                              className={`cursor-pointer ${
                                                                  selectedToolIndex === toolIndex
                                                                      ? "text-orange-500"
                                                                      : "text-gray-600"
                                                              }`}
                                                          >
                                                            {tool.name}
                                                          </span>
                                                        </span>
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                        {index === 2 && (
                                            <div className="p-2 text-gray-700">
                                                <p>2</p>
                                            </div>
                                        )}
                                        {index === 3 && (
                                            <div className="p-2 text-gray-700">
                                                <p>3</p>
                                            </div>
                                        )}
                                        {index === 4 && (
                                            <div className="p-2 text-gray-700">
                                                <p>4</p>
                                            </div>
                                        )}
                                        {index === 5 && (
                                            <div className="p-2 text-gray-700">
                                                <p>5</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}


                {/* Course Cards Grid */}
                <div className={`grid gap-6 ${isVisible ? "grid-cols-4" : "grid-cols-5"} w-full`}>
                    {data?.data?.map((course, index) => (
                        <div key={index}>
                            <CoursesCard
                                category={course.category.name}
                                text={course.description}
                                price={course.price}
                                rating={course.averageRating}
                                studentCount={course.enrollmentCount}
                                lgDisplay={isVisible ? "lg:w-[322px]" : "lg:w-[308px]"}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination (if needed) */}
            <div className="flex justify-center mt-8 gap-2 items-center">
                 <button
                     key={page+1}
                     onClick={() => setPage((p)=>Math.max(p - 1))}
                     disabled={page === 1}
                     className={`p-2 rounded ${
                         page === page
                             ? "bg-orange-500 text-white"
                             : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                     }`}
                 > <ArrowLeft/>
                 </button>
                <span>Page {page} of {data?.meta?.totalPages ?? 1}</span>
                <button
                    key={page-1}
                    onClick={() => setPage((p) => (data?.meta?.totalPages ? Math.min(p + 1, data.meta.totalPages) : p + 1))}
                    disabled={page === data?.meta?.totalPages}
                    className={`p-2 rounded ${
                        page === page
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                ><ArrowRight/>
                </button>
                {isFetching && <span className="ml-3 text-sm text-gray-500">Refreshing...</span>}
            </div>
        </div>
    )
}


export default Courses
