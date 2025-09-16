import React from "react";

interface CategoryCardProps {
    bgColour: string;
    img: string;
    imgBgColour: string;
    text: string;
    courseCount: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ bgColour, img, imgBgColour, text, courseCount }) => {
    return (
        <div
            className={`${bgColour} w-[220px] flex items-center py-2 px-4 gap-5 shadow-md lg:w-72 lg:py-4 md:w-[260px] md:py-3 rounded-xl`}
        >
            <div
                className={`px-2 py-2 ${imgBgColour} w-10 h-10 flex justify-center items-center lg:w-16 lg:h-16 md:w-12 md:h-12 rounded-md`}
            >
                <img src={img} className="w-8 h-8" alt={`${text} icon`} />
            </div>
            <div className="flex flex-col">
                <h3 className="my-2 text-xs lg:text-[20px] font-semibold">{text}</h3>
                <p className="text-gray-500 text-xs lg:text-sm">{courseCount} Courses</p>
            </div>
        </div>
    );
};

export default CategoryCard;
