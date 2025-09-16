import InstructorCard from "@/components/public/Landing Page/InstructorCard";
import InIMg1 from '../public/image/Image Instracter 1.jpg'
import InIMg2 from '../public/image/Image Instracter 2.jpg'
import InIMg3 from '../public/image/Image Instracter 3.jpg'
import InIMg4 from '../public/image/Image Instracter 4.jpg'
import InIMg5 from '../public/image/Image Instracter 5.jpg'
import {StaticImageData} from "next/image";
import CoursesCard from "@/components/public/Landing Page/CoursesCards";

import c1Img from '../public/image/Course Images1.jpg'
import c2Img from '../public/image/Course Images2.jpg'
import c3Img from '../public/image/Course Images3.jpg'
import c4Img from '../public/image/Course Images4.jpg'
import c5Img from '../public/image/Course Images5.jpg'
import c6Img from '../public/image/Course Images6.jpg'
import c7Img from '../public/image/Course Images7.jpg'
import c8Img from '../public/image/Course Images8.jpg'
import c9Img from '../public/image/Course Images9.jpg'
import c10Img from '../public/image/Course Images10.jpg'

const instructorCard: [StaticImageData | string, string, string, string, string][] = [
    [InIMg1,'Devon Lane','Senior Developer','4.6','854'],
    [InIMg2,'Darrell Steward','Digital Product Designer','4.9','451,444'],
    [InIMg3,'Jane Cooper','UI/UX Designer','4.8','435,671'],
    [InIMg4,'Albert Flores','Adobe Instructor','4.7','511,123'],
    [InIMg5,'Kathryn Murphy','Lead Developer','4.2','2,711']
];

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

function App() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 pb-10">
                {instructorCard.map(
                    ([img, name, position, rating, studentCount], i) => (
                        <InstructorCard
                            key={i}
                            img={img}
                            name={name}
                            position={position}
                            rating={rating}
                            studentCount={studentCount}
                        />
                    )
                )}
            </div>
            <div className='grid grid-cols-1 gap-5 pb-90 lg:grid-cols-6 md:grid-cols-3'>
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
        </>



    )
}

export default App