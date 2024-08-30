import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import link from "../info/link";

export default function Landing() {
    return (
        <div>
            {/*Hero*/}
            <div className="w-full flex flex-col gap-[70px] mt-[60px]">
                {/*Nav*/}
                <div className="w-full flex justify-between items-center">
                <Logo />
                <div className="flex gap-10 justify-center items-center">
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
                    <h1 className="w-[531px]">Navigating the digital landscape for success</h1>
                    <span className="w-[498px] font-normal text-xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</span>
                    <Button property="primary" href={link.aboutus} label="Book a consultation"/>
                </div>
                <Image src="/hero.svg" width={1} height={1} alt="Hero" className="w-auto h-auto" priority/>
                </div>
                {/*Company Logo*/}
                <div className="w-full flex justify-between">
                    <Link href="https://www.amazon.com/">
                        <Image src="/company_logo/amazon.svg" width={1} height={1} alt="Amazon" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                    </Link>
                    <Link href="https://dribbble.com/">
                        <Image src="/company_logo/dribble.svg" width={1} height={1} alt="Dribble" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                    </Link>
                    <Link href="https://www.hubspot.com/">
                        <Image src="/company_logo/hubspot.svg" width={1} height={1} alt="Hubspot" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                    </Link>
                    <Link href="https://www.notion.so/">
                        <Image src="/company_logo/notion.svg" width={1} height={1} alt="Notion" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                    </Link>
                    <Link href="https://www.netflix.com/">
                        <Image src="/company_logo/netflix.svg" width={1} height={1} alt="Netflix" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                    </Link>
                    <Link href="https://zoom.us/">
                        <Image src="/company_logo/zoom.svg" width={1} height={1} alt="Zoom" className="w-auto h-auto grayscale hover:grayscale-0" priority/>
                    </Link>
                </div>
            </div>
        </div>
    )
}