import star from '../../assets/icons/Star.svg'
import clock from '../../assets/icons/Clock.svg'
import signel from '../../assets/icons/bar-chart.svg'
import user from '../../assets/icons/User.svg'
import React from "react";

interface featureCoursesCardProps {
    cardImg:string;
    categoryColour:string;
    categoryTextColour:string;
    categoryText:string;
    price:string;
    cutPrice:string;
    discription:string;
    profileImg:string;
    profileName:string;
    rating:string;
    ratingCount:string;
    studentCount:string;
    level:string;
    timeLength:string;
}
const FeatureCoursesCard:React.FC<featureCoursesCardProps> = ({cardImg,categoryColour,categoryTextColour,categoryText,price,cutPrice,discription,profileImg,profileName,rating,ratingCount,studentCount,level,timeLength}) => {
    return (
        <div className='flex flex-row gap-5 w-[622px] shadow relative bg-white '>

            <div className="bg-gray-300 h-[1px] w-[422px] absolute top-32 right-0"></div>

            <div className="w-[200px] h-auto overflow-hidden flex-shrink-0">
                <img src={cardImg} alt="Course" className="w-full h-full object-cover" />
            </div>

            <div className='flex flex-col gap-3 p-4 flex-grow'>
                <div className='flex justify-between items-center'>
                    <p className={`px-3 py-1 text-xs rounded ${categoryColour} ${categoryTextColour}`}>{categoryText}</p>
                    <p className="font-light text-gray-800">
                        {price} <span className='text-gray-400 line-through'>{cutPrice}</span>
                    </p>
                </div>

                <p className="font-medium text-gray-800">{discription}</p>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 py-1'>
                        <img src={profileImg} alt="Instructor" className="w-6 h-6 rounded-full" />
                        <p className="text-sm text-gray-700">{profileName}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <img src={star} alt="Rating" className="w-4 h-4" />
                        <p className="text-sm text-gray-700">{rating}<span className='text-gray-400 pl-1'>({ratingCount})</span></p>
                    </div>
                </div>

                <div className='flex justify-between items-center text-sm text-gray-600 pt-4'>
                    <div className='flex items-center gap-1'>
                        <img src={user} alt="Students" className="w-4 h-4" />
                        <p>{studentCount}<span className='text-gray-400'>students</span></p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <img src={signel} alt="Level" className="w-4 h-4" />
                        <p>{level}</p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <img src={clock} alt="Duration" className="w-4 h-4" />
                        <p>{timeLength}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureCoursesCard;
