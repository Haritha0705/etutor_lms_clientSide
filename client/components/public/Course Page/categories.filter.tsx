import React, {useState} from 'react';
import {CategoryNames, CategoryStyles} from "@/enum/category.enum";
import {Category} from "@/types/course.types";

type CoursesCardProps = {
    subCategories?: Category[];
}

const CategoriesFilter = ({subCategories}:CoursesCardProps) => {
    const [openNested, setOpenNested] = useState<number | null>(null);
const toggleNested = (index: number) => setOpenNested(openNested === index ? null : index);
    return (
        <>
            {subCategories?.map((sub, subIndex) => (
                <div key={subIndex} className="mb-1">
                    {sub.subCategories.length > 0 ? (
                        <>
                            <button
                                onClick={() => toggleNested(subIndex)}
                                className="w-full text-left flex items-center justify-between p-2 text-gray-600 hover:bg-gray-50 focus:outline-none"
                            >
                                                            <span className="flex items-center text-md pl-2">
                                                              {CategoryStyles[sub.name as CategoryNames]?.icon && (
                                                                  <span className={`mr-2 text-xl ${
                                                                      openNested === subIndex ? "text-orange-500" : "text-gray-600"
                                                                  }`}>
                                                                  {CategoryStyles[sub.name as CategoryNames].icon}
                                                                </span>
                                                              )}
                                                                <span className={`${openNested === subIndex ? "text-orange-500" : "text-gray-600"}`}>
                                                                {sub.name}
                                                              </span>
                                                            </span>

                                <svg
                                    className={`w-3 h-3 transform ${openNested === subIndex ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openNested === subIndex && (
                                <div>
                                    {sub.subCategories.map((nested, nestedIndex) => (
                                        <div key={nestedIndex} className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50">
                                            <label className="flex items-center text-sm pl-4">
                                                <input type="checkbox" className="mr-2" />
                                                {nested.name}
                                            </label>
                                            <span className="text-sm">{nested.coursesCount}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-50">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
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