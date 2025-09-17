// import InstructorCard from "@/components/public/Landing Page/cards/InstructorCard";
// import InIMg1 from '../public/image/Image Instracter 1.jpg'
// import InIMg2 from '../public/image/Image Instracter 2.jpg'
// import InIMg3 from '../public/image/Image Instracter 3.jpg'
// import InIMg4 from '../public/image/Image Instracter 4.jpg'
// import InIMg5 from '../public/image/Image Instracter 5.jpg'
// import {StaticImageData} from "next/image";
// import CoursesCard from "@/components/public/Landing Page/cards/CoursesCards";
//
// import c1Img from '../public/image/Course Images1.jpg'
// import c2Img from '../public/image/Course Images2.jpg'
// import c3Img from '../public/image/Course Images3.jpg'
// import c4Img from '../public/image/Course Images4.jpg'
// import c5Img from '../public/image/Course Images5.jpg'
// import c6Img from '../public/image/Course Images6.jpg'
// import c7Img from '../public/image/Course Images7.jpg'
// import c8Img from '../public/image/Course Images8.jpg'
// import c9Img from '../public/image/Course Images9.jpg'
// import c10Img from '../public/image/Course Images10.jpg'
// import CategoryCard from "@/components/public/Landing Page/cards/CategoryCard";
//
// import hand from '../public/icons/Handshake.svg'
// import camera from '../public/icons/Camera.svg'
// import chart from '../public/icons/ChartBarHorizontal.svg'
// import music from '../public/icons/Headphones.svg'
// import pkg from '../public/icons/Package.svg'
// import pen from '../public/icons/PenNib.svg'
// import mega from '../public/icons/MegaphoneSimple.svg'
// import cpu from '../public/icons/Cpu.svg'
// import bug from '../public/icons/BugDroid.svg'
// import receipt from '../public/icons/Receipt.svg'
// import kit from '../public/icons/FirstAidKit.svg'
// import card from '../public/icons/CreditCard.svg'
import HeroPage from "@/components/public/Landing Page/Hero";

// const instructorCard: [StaticImageData | string, string, string, string, string][] = [
//     [InIMg1,'Devon Lane','Senior Developer','4.6','854'],
//     [InIMg2,'Darrell Steward','Digital Product Designer','4.9','451,444'],
//     [InIMg3,'Jane Cooper','UI/UX Designer','4.8','435,671'],
//     [InIMg4,'Albert Flores','Adobe Instructor','4.7','511,123'],
//     [InIMg5,'Kathryn Murphy','Lead Developer','4.2','2,711']
// ];
//
// const coursesCards:[StaticImageData | string, string, string, string, string,string,string,string][] =[
//     [c1Img,'Design','Machine Learning A-Z™: Hands-On Python & R In Data...','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
//     [c2Img,'Developments','The Complete 2021 Web Development Bootcamp','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
//     [c3Img,'Business','Learn Python Programming Masterclass','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
//     [c4Img,'Marketing','The Complete Digital Marketing Course - 12 Courses in 1','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
//     [c5Img,'IT & Software','Reiki Level I, II and Master/Teacher Program','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
//     [c6Img,'Music','The Complete Foundation Stock Trading Course','bg-orange-200/30','text-red-700','$57','5.0','265.7K'],
//     [c7Img,'Marketing','Beginner to Pro in Excel: Financial','bg-purple-300/30','text-purple-700','$57','5.0','265.7K'],
//     [c8Img,'Health & Fitness','The Python Mega Course: Build 10 Real World Applications','bg-green-200/30','text-green-700','$57','5.0','265.7K'],
//     [c9Img,'Design','Copywriting - Become a Freelance Copywriter, your ow...','bg-red-200/30','text-red-700','$57','5.0','265.7K'],
//     [c10Img,'Lifestyle','Google Analytics Certification - Learn How To Pass The Exam','bg-orange-200/30','text-orange-700','$57','5.0','265.7K']
// ]
//
// const categoryCards:[string,string,string,string,string | StaticImageData][] = [
//     ['bg-purple-300/30', 'bg-white', 'Label', '63,476', cpu],
//     ['bg-green-200/30', 'bg-white', 'Business', '52,822', hand],
//     ['bg-orange-200/30', 'bg-white', 'Finance & Accounting', '33,841 ', card],
//     ['bg-red-200/30', 'bg-white', 'IT & Software', '22,649', chart],
//     ['bg-white', 'bg-orange-500', 'Personal Development', '20,126', bug],
//     ['bg-gray-300/30', 'bg-white', 'Office Productivity', '13,932', receipt],
//     ['bg-purple-300/30', 'bg-white', 'Marketing', '12,068', mega],
//     ['bg-gray-300/30', 'bg-white', 'Photography & Video', '6,196', camera],
//     ['bg-orange-200/30', 'bg-white', 'Lifestyle', '2,736', pkg],
//     ['bg-red-200/30', 'bg-white', 'Design', '2,600 ', pen],
//     ['bg-green-200/30', 'bg-white', 'Health & Fitness', '1,678', kit],
//     ['bg-orange-200/30', 'bg-white', 'Music', '959', music],
// ];

function App() {
    return (
        <>
            {/*<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 pb-10">*/}
            {/*    {instructorCard.map(*/}
            {/*        ([img, name, position, rating, studentCount], i) => (*/}
            {/*            <InstructorCard*/}
            {/*                key={i}*/}
            {/*                img={img}*/}
            {/*                name={name}*/}
            {/*                position={position}*/}
            {/*                rating={rating}*/}
            {/*                studentCount={studentCount}*/}
            {/*            />*/}
            {/*        )*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*<div className='grid grid-cols-1 gap-5 pb-90 lg:grid-cols-6 md:grid-cols-3'>*/}
            {/*    {coursesCards.map(([img,category,text,categoryColour,categoryTextColour,price,rating,studentCount],i)=>(*/}
            {/*        <CoursesCard*/}
            {/*            key={i}*/}
            {/*            img={img}*/}
            {/*            category={category}*/}
            {/*            text={text}*/}
            {/*            categoryColour={categoryColour}*/}
            {/*            categoryTextColour={categoryTextColour}*/}
            {/*            price={price}*/}
            {/*            rating={rating}*/}
            {/*            studentCount={studentCount}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div className="grid grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-5">*/}
            {/*    {categoryCards.map(([bg, imgBg, text, count, img],i) => (*/}
            {/*        <CategoryCard*/}
            {/*            key={i}*/}
            {/*            bgColour={bg}*/}
            {/*            imgBgColour={imgBg}*/}
             {/*            text={text}*/}
            {/*            courseCount={count}*/}
            {/*            img={img}*/}
            {/*        />))}*/}
            {/*</div>*/}
            <HeroPage/>
        </>



    )
}

export default App