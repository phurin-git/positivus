import HeadingAndSubHeading from "../components/HeadingAndSubHeading"
import LinkButton from "../components/LinkButton"
import link from "../info/link"

export default function CaseStudies() {
    return (
        <div id={link.usecases.substring(1)} className="pt-[70px] mt-[70px]">
            <HeadingAndSubHeading HeadLabel="Case Studies" SubHeadLabel={<p className="w-[580px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>}/>
            {/*Case Study block*/}
            <div className="w-full rounded-[45px] flex gap-16 px-[60px] py-[70px] bg-dark">
                <div className="flex flex-col gap-5">
                    <p className="w-[286px] text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                    <LinkButton property="simple green" href={link.usecases} label="Learn more"/>
                </div>
                <span className="w-px h-[186px] block bg-white"></span>
                <div className="flex flex-col gap-5">
                    <p className="w-[286px] text-white">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <LinkButton property="simple green" href={link.usecases} label="Learn more"/>
                </div>
                <span className="w-px h-[186px] block bg-white"></span>
                <div className="flex flex-col gap-5">
                    <p className="w-[286px] text-white">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <LinkButton property="simple green" href={link.usecases} label="Learn more"/>
                </div>
            </div>
        </div>
    )
}