import c1Img from '../../../../public/image/Course Images1.jpg'
import c2Img from '../../../../public/image/Course Images2.jpg'
import c3Img from '../../../../public/image/Course Images3.jpg'
import c4Img from '../../../../public/image/Course Images4.jpg'
import c5Img from '../../../../public/image/Course Images5.jpg'
import c6Img from '../../../../public/image/Course Images6.jpg'
import c7Img from '../../../../public/image/Course Images7.jpg'
import c8Img from '../../../../public/image/Course Images8.jpg'
import c9Img from '../../../../public/image/Course Images9.jpg'
import c10Img from '../../../../public/image/Course Images10.jpg'
import {StaticImageData} from "next/image";
import CoursesCard from "@/components/public/Landing Page/cards/CoursesCards";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

const coursesCards:[StaticImageData | string, string, string, string, string,string,string,string][] =[
    [c1Img,'Design','Machine Learning A-Z™: Hands-On Python & R In Data...','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
    [c2Img,'Developments','The Complete 2021 Web Development Bootcamp','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
    [c3Img,'Business','Learn Python Programming Masterclass','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
    [c4Img,'Marketing','The Complete Digital Marketing Course - 12 Courses in 1','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
    [c5Img,'IT & Software','Reiki Level I, II and Master/Teacher Program','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
    [c6Img,'Music','The Complete Foundation Stock Trading Course','bg-orange-200/30','text-red-700','$57','5.0','265.7K'],
    [c7Img,'Marketing','Beginner to Pro in Excel: Financial','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
    [c8Img,'Health & Fitness','The Python Mega Course: Build 10 Real World Applications','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
    [c9Img,'Design','Copywriting - Become a Freelance Copywriter, your ow...','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
    [c10Img,'Lifestyle','Google Analytics Certification - Learn How To Pass The Exam','bg-orange-200/30','text-orange-700','$57','5.0','265.7K']
]
const BestSellingCoursesSection = () => {
    return (
        <section className='w-full flex flex-col items-center justify-between bg-gray-300/30 px-40 py-10'>
            <h1 className='text-4xl font-semibold pb-10'>Best selling courses</h1>
            <div className='grid grid-cols-5 gap-5 '>
                {coursesCards.map(([img,category,text,categoryColour,categoryTextColour,price,rating,studentCount],i)=>(
                    <CoursesCard
                        key={i}
                        img={img}
                        category={category}
                        text={text}
                        categoryColour={categoryColour}
                        categoryTextColour={categoryTextColour}
                        price={price}
                        rating={rating}
                        studentCount={studentCount}
                    />
                ))}
            </div>
            <Button className={"flex items-center gap-3 my-6"}>
                Browse All <ArrowRight className="w-4 h-4"/>
            </Button>
        </section>
    );
};

export default BestSellingCoursesSection;