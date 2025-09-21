import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hero_main from "../../../../public/image/HeroMain.png";

const TopBannerSection = () => {
    return (
       <section className="flex flex-row items-center justify-between pl-56 w-full bg-gray-300/30">
           <div className="flex flex-col items-start gap-6">
               <h1 className="text-6xl font-bold leading-tight">
                   Learn with experts anytime, anywhere
               </h1>
               <p className="text-gray-600 text-lg max-w-md">
                   Our mission is to help people find the best courses online and learn
                   from experts wherever they are.
               </p>
               <Button size="lg" className="gap-2">
                   Create Account <ArrowRight className="w-4 h-4" />
               </Button>
           </div>
           <div className="w-full flex justify-end">
               <Image
                  src={hero_main}
                  alt="Hero illustration"
                  className="w-full h-auto object-contain"
                  priority
               />
           </div>
       </section>
    );
};

export default TopBannerSection;
