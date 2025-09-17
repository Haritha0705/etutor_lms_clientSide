import TopBannerSection from "@/components/public/Landing Page/sections/TopBanner.section";
import CategorySection from "@/components/public/Landing Page/sections/Category.section";
import BestSellingCoursesSection from "@/components/public/Landing Page/sections/BestSellingCoursesSection";
import RecentlyAddedCoursesSection from "@/components/public/Landing Page/sections/RecentlyAddedCourses.section";
import BecomeAnInstructorSection from "@/components/public/Landing Page/sections/BecomeAnInstructor.section";
import TopInstructorSection from "@/components/public/Landing Page/sections/TopInstructor.section";
import TrustedCompaniesSection from "@/components/public/Landing Page/sections/TrustedCompanies.section";
import BottomBannerSection from "@/components/public/Landing Page/sections/BottomBanner.section";

const HeroPage = () => {
  return(
      <>
        <TopBannerSection/>
        <CategorySection/>
        <BestSellingCoursesSection/>
        <RecentlyAddedCoursesSection/>
        <BecomeAnInstructorSection/>
        <TopInstructorSection/>
        <TrustedCompaniesSection/>
        <BottomBannerSection/>
      </>
  )
}

export default HeroPage