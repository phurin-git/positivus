import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import link from "../info/link";

export default function Landing() {
    return (
        <div>
            {/*Hero*/}
            <div className="w-full flex flex-col gap-[70px] mt-[30px] sm:mt-[60px]">
                {/*Nav*/}
                <div className="w-full flex justify-between items-center">
                    <Logo className="w-[144px] sm:w-auto h-auto"/>
                    <button className="w-[24px] h-[16px] flex flex-col justify-between">
                        {[...Array(3)].map((_, i) => (
                            <span key={i} className="w-full h-[2px] rounded-full sm:hidden bg-black"></span>
                        ))}
                    </button>
                    <div className="hidden sm:flex gap-10 justify-center items-center">
                        <Link href={link.aboutus} className="font-normal text-xl">About us</Link>
                        <Link href={link.services} className="font-normal text-xl">Services</Link>
                        <Link href={link.usecases} className="font-normal text-xl">Use Cases</Link>
                        <Link href={link.pricing} className="font-normal text-xl">Pricing</Link>
                        <Link href={link.blog} className="font-normal text-xl">Blog</Link>
                        <Button property="secondary" href={link.contactus} label="Request a quote"/>
                    </div>
                </div>
                {/*Header*/}
                <div className="w-full flex justify-between">
                <div className="flex flex-col gap-[35px]">
                    <h1 className="sm:w-[531px]">Navigating the digital landscape for success</h1>
                    <Image src="/hero.svg" width={601} height={515} alt="" className="sm:hidden w-[362px]  h-auto" priority/>
                    <span className="sm:w-[498px] font-normal text-xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</span>
                    <Button property="primary" href={link.aboutus} label="Book a consultation" className="w-full sm:w-fit text-center"/>
                </div>
                <Image src="/hero.svg" width={601} height={515} alt="" className="hidden sm:block w-auto h-auto" priority/>
                </div>
                {/*Company Logo*/}
                <div className="flex flex-col sm:flex-row sm:gap-24 max-sm:-mx-5 overflow-hidden">
                    <div className="flex gap-9 sm:gap-24 max-sm:-mr-[80px]">
                        <Link href="https://www.amazon.com/">
                            <Image src="/company_logo/amazon.svg" width={125} height={48} alt="Amazon" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                        </Link>
                        <Link href="https://dribbble.com/">
                            <Image src="/company_logo/dribble.svg" width={127} height={48} alt="Dribble" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                        </Link>
                        <Link href="https://www.hubspot.com/">
                            <Image src="/company_logo/hubspot.svg" width={129} height={48} alt="Hubspot" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                        </Link>
                    </div>
                    <div className="flex gap-9 sm:gap-24 max-sm:-ml-[80px]">
                        <Link href="https://www.notion.so/">
                            <Image src="/company_logo/notion.svg" width={126} height={48} alt="Notion" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                        </Link>
                        <Link href="https://www.netflix.com/">
                            <Image src="/company_logo/netflix.svg" width={147} height={48} alt="Netflix" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                        </Link>
                        <Link href="https://zoom.us/">
                            <Image src="/company_logo/zoom.svg" width={111} height={48} alt="Zoom" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}