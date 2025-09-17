import {StaticImageData} from "next/image";
import hand from '../../../../public/icons/Handshake.svg'
import camera from '../../../../public/icons/Camera.svg'
import chart from '../../../../public/icons/ChartBarHorizontal.svg'
import music from '../../../../public/icons/Headphones.svg'
import pkg from '../../../../public/icons/Package.svg'
import pen from '../../../../public/icons/PenNib.svg'
import mega from '../../../../public/icons/MegaphoneSimple.svg'
import cpu from '../../../../public/icons/Cpu.svg'
import bug from '../../../../public/icons/BugDroid.svg'
import receipt from '../../../../public/icons/Receipt.svg'
import kit from '../../../../public/icons/FirstAidKit.svg'
import card from '../../../../public/icons/CreditCard.svg'
import CategoryCard from "@/components/public/Landing Page/cards/CategoryCard";
import { ArrowRight } from "lucide-react";

const categoryCards:[string,string,string,string,string | StaticImageData][] = [
    ['bg-purple-300/30', 'bg-white', 'Label', '63,476', cpu],
    ['bg-green-200/30', 'bg-white', 'Business', '52,822', hand],
    ['bg-orange-200/30', 'bg-white', 'Finance & Accounting', '33,841 ', card],
    ['bg-red-200/30', 'bg-white', 'IT & Software', '22,649', chart],
    ['bg-white', 'bg-orange-500', 'Personal Development', '20,126', bug],
    ['bg-gray-300/30', 'bg-white', 'Office Productivity', '13,932', receipt],
    ['bg-purple-300/30', 'bg-white', 'Marketing', '12,068', mega],
    ['bg-gray-300/30', 'bg-white', 'Photography & Video', '6,196', camera],
    ['bg-orange-200/30', 'bg-white', 'Lifestyle', '2,736', pkg],
    ['bg-red-200/30', 'bg-white', 'Design', '2,600 ', pen],
    ['bg-green-200/30', 'bg-white', 'Health & Fitness', '1,678', kit],
    ['bg-orange-200/30', 'bg-white', 'Music', '959', music],
];
const CategorySection = () => {
    return (
      <section className="flex flex-col items-center justify-between w-full">
          <div>
              <p className='text-4xl font-semibold py-10'>Browse top category</p>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {categoryCards.map(([bg, imgBg, text, count, img],i) => (
                  <CategoryCard
                      key={i}
                      bgColour={bg}
                      imgBgColour={imgBg}
                      text={text}
                      courseCount={count}
                      img={img}
                  />))}
          </div>
          <div className='flex gap-5 py-10'>
              <p className='text-gray-700'>We have more category & subcategory</p>
              <p className='text-orange-500 flex items-center gap-3'>Browse All <ArrowRight className="w-4 h-4"/></p>
          </div>
      </section>
    );
};

export default CategorySection;