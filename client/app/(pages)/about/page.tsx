// const About = () => {
//     return (
//         <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
//             <h1>About</h1>
//         </div>
//     )
// }
//
// export default About

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "No-Code Development",
    "Design",
    "Marketing",
    "Lifestyle",
    "Photography & Video",
    "Music",
    "Health & Fitness",
];

interface Course {
    id: number;
    title: string;
    description: string;
    category: {
        id: number;
        name: string;
    };
    subCategory?: {
        id: number;
        name: string;
        coursesCount: number;
    };
    tool?: {
        id: number;
        name: string;
    };
}

export default function CourseFilter() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const query = selectedCategories.length
                    ? `?categories=${selectedCategories.join(",")}&`
                    : "?";

                const res = await axios.get(`http://localhost:4000/api/v1/courses${query}page=1&limit=12`);

                setCourses(res.data.data);
            } catch (error) {
                console.error("Error fetching courses", error);
                setCourses([]); // prevent map crash
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, [selectedCategories]);

    return (
        <div className="flex gap-8 p-6">
            {/* Sidebar Filters */}
            <aside className="w-64 border-r pr-4">
                <h2 className="font-bold mb-3 text-lg">CATEGORY</h2>
                <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(cat)}
                                onChange={() => handleCategoryChange(cat)}
                            />
                            <span>{cat}</span>
                        </label>
                    ))}
                </div>
            </aside>

            {/* Courses List */}
            <main className="flex-1">
                <h3 className="font-bold mb-4 text-xl">Courses</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : courses.length === 0 ? (
                    <p>No courses found.</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course) => (
                            <li key={course.id} className="border rounded p-4 shadow-sm">
                                <h4 className="font-semibold">{course.title}</h4>
                                <p className="text-sm text-gray-600">{course.description}</p>
                                <p className="text-xs text-gray-500 mt-2">
                                    {course.category?.name}
                                    {course.subCategory ? ` → ${course.subCategory.name} -> ${course.tool?.name}` : ""}
                                </p>
                                <span>{course.subCategory?.coursesCount}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
}
