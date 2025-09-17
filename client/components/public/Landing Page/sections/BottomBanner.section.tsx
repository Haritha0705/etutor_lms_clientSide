import {Button} from "@/components/ui/button";

const BottomBannerSection = () => {
    return (
        <section className={'bg-gray-900 flex flex-row gap-5 items-center justify-between  py-15 w-full  px-58'}>
            <div className={'text-white flex flex-col gap-10'}>
                <h1 className={'text-4xl max-w-120  font-semibold'}>Start learning with 67.1k students around the world.</h1>
                <div className={'flex gap-5'}>
                    <Button className={'justify-center'}>Join the Family</Button>
                    <Button className={'text-white justify-center'}>Browse all courses</Button>
                </div>
            </div>
            <div className={'text-white flex gap-5'}>
                <div className={'flex flex-col gap-5'}>
                    <span className={'text-4xl font-semibold'}>6.3k</span>
                    <p className={'text-sm text-gray-500'}>Online courses</p>
                </div>
                <div className={'flex flex-col gap-5'}>
                    <span  className={'text-4xl font-semibold'}>26k</span>
                    <p className={'text-sm text-gray-500'}>Certified Instructor</p>
                </div>
                <div className={'flex flex-col gap-5'}>
                    <span  className={'text-4xl font-semibold'}>99.9%</span>
                    <p className={'text-sm text-gray-500'}>Sucess Rate</p>
                </div>
            </div>
        </section>
    );
};

export default BottomBannerSection;