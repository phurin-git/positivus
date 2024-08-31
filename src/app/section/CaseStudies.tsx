import HeadingAndSubHeading from "../ui/HeadingAndSubHeading"
import LinkButton from "../ui/LinkButton"
import link from "../info/link"

export default function CaseStudies() {
    return (
        <div id={link.usecases.substring(1)} className="pt-[30px] sm:pt-[70px] mt-[30px] sm:mt-[70px]">
            <HeadingAndSubHeading headLabel="Case Studies" subHeadLabel="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" subHeadWidth={580}/>
            {/*Case Study block*/}
            <div className="w-full rounded-[45px] flex max-sm:gap-[20px] sm:justify-between sm:px-[60px] sm:py-[70px] sm:bg-dark">
                <div className="rounded-[45px] flex flex-col gap-5 max-sm:px-[50px] max-sm:py-[42px] bg-dark">
                    <p className="w-[250px] sm:w-[286px] text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <LinkButton property="simple green" href={link.usecases} label="Learn more"/>
                </div>
                <span className="w-px h-[186px] hidden sm:block bg-white"></span>
                <div className="rounded-[45px] flex flex-col gap-5 max-sm:px-[50px] max-sm:py-[42px] bg-dark">
                    <p className="w-[250px] sm:w-[286px] text-white">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <LinkButton property="simple green" href={link.usecases} label="Learn more"/>
                </div>
                <span className="w-px h-[186px] hidden sm:block bg-white"></span>
                <div className="rounded-[45px] flex flex-col gap-5 max-sm:px-[50px] max-sm:py-[42px] bg-dark">
                    <p className="w-[250px] sm:w-[286px] text-white">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <LinkButton property="simple green" href={link.usecases} label="Learn more"/>
                </div>
            </div>
        </div>
    )
}