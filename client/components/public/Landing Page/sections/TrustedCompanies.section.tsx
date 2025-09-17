import Logo1 from '../../../../public/icons/Netfixsvg.svg'
import Logo2 from '../../../../public/icons/Youtube.svg'
import Logo3 from '../../../../public/icons/Google.svg'
import Logo4 from '../../../../public/icons/Lenovo.svg'
import Logo5 from '../../../../public/icons/Slack.svg'
import Logo6 from '../../../../public/icons/Vesion.svg'
import Logo7 from '../../../../public/icons/Lemark.svg'
import Logo8 from '../../../../public/icons/Microsoft.svg'
import Image from "next/image";

const TrustedCompaniesSection = () => {
    const companyLogos = [Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8]
    const companyList: React.JSX.Element[] = companyLogos.map((logo,index) =>(
        <div key={index} className={'shadow bg-white py-5 px-10'}>
            <Image src={logo} alt={"company Logos"}/>
        </div>
    ))
    return (
        <section className={'bg-white w-full pb-15 flex flex-row justify-between items-center pt-90 px-60'}>
            <div className={'flex flex-col gap-5'}>
                <h3 className={'font-semibold text-2xl'}>6.3k trusted companies</h3>
                <p className={'max-w-xs text-gray-500'}>Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
            </div>
            <div className={'grid grid-cols-4 gap-8'}>
                {companyList}
            </div>
        </section>
    );
};

export default TrustedCompaniesSection;