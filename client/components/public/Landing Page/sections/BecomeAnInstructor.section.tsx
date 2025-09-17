import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent } from "@/components/ui/card";
import InstructorCard from "@/components/public/Landing Page/cards/InstructorCard";
import InIMg1 from '../../../../public/image/Image Instracter 1.jpg'
import InIMg2 from '../../../../public/image/Image Instracter 2.jpg'
import InIMg3 from '../../../../public/image/Image Instracter 3.jpg'
import InIMg4 from '../../../../public/image/Image Instracter 4.jpg'
import InIMg5 from '../../../../public/image/Image Instracter 5.jpg'
import Image, {StaticImageData} from "next/image";
import coverImg from '../../../../public/image/Become an Instructor Cover.jpg'

const instructorCard: [StaticImageData | string, string, string, string, string][] = [
    [InIMg1,'Devon Lane','Senior Developer','4.6','854'],
    [InIMg2,'Darrell Steward','Digital Product Designer','4.9','451,444'],
    [InIMg3,'Jane Cooper','UI/UX Designer','4.8','435,671'],
    [InIMg4,'Albert Flores','Adobe Instructor','4.7','511,123'],
    [InIMg5,'Kathryn Murphy','Lead Developer','4.2','2,711']
];

const BecomeAnInstructorSection = () => {
    return (
        <section className="relative w-full flex flex-col items-center justify-between px-52 pt-16 pb-96">
            {/* Top Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative w-full">
                {/* Cover Image */}
                <Image
                    src={coverImg}
                    alt="Cover"
                    className="object-cover w-full rounded-2xl"
                    width={800}
                    height={600}
                />

                {/* Overlay Box */}
                <div className="absolute left-10 top-10 bg-black/50 rounded-xl px-6 py-10 max-w-md">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2 pb-8">
                            <h3 className="text-white text-3xl font-semibold">Become an instructor</h3>
                            <p className="text-white">
                                Instructors from around the world teach millions of students on Udemy.
                                We provide the tools and skills to teach what you love.
                            </p>
                        </div>
                        <Button
                            className="bg-white text-black hover:bg-gray-100 flex items-center gap-2"
                            size="lg"
                        >
                            Start teaching <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Steps Card */}
                <Card className="bg-white shadow-md flex flex-col justify-center px-10 py-8 gap-10">
                    <CardContent className="flex flex-col gap-6">
                        <h3 className="text-3xl font-semibold">Your teaching & earning steps</h3>
                        <div className="grid grid-cols-1 gap-5 font-light">
                            {[
                                { num: "1", text: "Apply to become instructor", color: "bg-purple-200/50 text-purple-700" },
                                { num: "2", text: "Build & edit your profile", color: "bg-orange-200/50 text-orange-700" },
                                { num: "3", text: "Create your new course", color: "bg-red-200/50 text-red-700" },
                                { num: "4", text: "Start teaching & earning", color: "bg-green-200/50 text-green-700" },
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-center">
                  <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step.color}`}
                  >
                    {step.num}
                  </span>
                                    <p>{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Instructor Highlight Section */}
            <section className="flex flex-col items-center justify-between absolute w-[87%] bottom-[-300px] bg-gray-300/30   shadow-md rounded-xl">
                <h1 className="text-4xl font-semibold py-10 pl-8">
                    Top instructor of the month
                </h1>
                <div className="grid grid-cols-5 gap-5 pb-10">
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

                <div className="flex gap-3 pb-10 items-center">
                    <p className="text-gray-500 text-md">
                        Thousands of students waiting for an instructor. Start teaching & earning now!
                    </p>
                    <Button variant="link" className="text-orange-500 flex items-center gap-1">
                        Become Instructor <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </section>
        </section>
    );
};

export default BecomeAnInstructorSection;