import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Logo from "./components/Logo";
import PlusIcon from "./components/PlusIcon";
import Card from "./components/Card";
import LinkButton from "./components/LinkButton";

export default function Home() {
  return (
    <>
      {/*Hero*/}
      <div className="w-full flex flex-col gap-[70px]">
        {/*Nav*/}
        <div className="w-full flex flex-row justify-between items-center">
          <Logo />
          <div className="w-fit flex flex-row gap-10 justify-center items-center">
            <Link href="/" className="font-normal text-xl">About us</Link>
            <Link href="/" className="font-normal text-xl">Services</Link>
            <Link href="/" className="font-normal text-xl">Use Cases</Link>
            <Link href="/" className="font-normal text-xl">Pricing</Link>
            <Link href="/" className="font-normal text-xl">Blog</Link>
            <Button property="secondary" href="/" label="Request a quote"/>
          </div>
        </div>
        {/*Header*/}
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-[35px]">
            <h1 className="w-[531px]">Navigating the digital landscape for success</h1>
            <span className="w-[498px] font-normal text-xl">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</span>
            <Button property="primary" href="/" label="Book a consultation"/>
          </div>
          <Image src="/hero.svg" width={600.46} height={515} alt="Hero" className="w-auto h-auto"/>
        </div>
        {/*Company Logo*/}
        <div className="w-full flex justify-between">
          <Link href="https://www.amazon.com/">
            <Image src="/company_logo/amazon.svg" width={124.11} height={48} alt="Amazon" className="w-auto h-auto grayscale hover:grayscale-0"/>
          </Link>
          <Link href="https://dribbble.com/">
            <Image src="/company_logo/dribble.svg" width={126.37} height={48} alt="Dribble" className="w-auto h-auto grayscale hover:grayscale-0"/>
          </Link>
          <Link href="https://www.hubspot.com/">
            <Image src="/company_logo/hubspot.svg" width={128.63} height={48} alt="Hubspot" className="w-auto h-auto grayscale hover:grayscale-0"/>
          </Link>
          <Link href="https://www.notion.so/">
            <Image src="/company_logo/notion.svg" width={145.55} height={48} alt="Notion" className="w-auto h-auto grayscale hover:grayscale-0"/>
          </Link>
          <Link href="https://www.netflix.com/">
            <Image src="/company_logo/netflix.svg" width={125.24} height={48} alt="Netflix" className="w-auto h-auto grayscale hover:grayscale-0"/>
          </Link>
          <Link href="https://zoom.us/">
            <Image src="/company_logo/zoom.svg" width={110.57} height={48} alt="Zoom" className="w-auto h-auto grayscale hover:grayscale-0"/>
          </Link>
        </div>
      </div>
      {/*Heading & Sub Heading - Services*/}
      <div className="w-full flex flex-row gap-10 mt-[140px] mb-[80px]">
        <Heading property="green" label="Services"/>
        <p className="w-[580px] h-fit">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      {/*Service Cards*/}
      <div className="w-full flex flex-col gap-10 items-center">
        <div className="w-full flex flex-row gap-10">
          <Card property={{card:"grey", label:"green"}} label="Search engine optimization" image="/card/tokyo-magnifier-web-search-with-elements.svg"/>
          <Card property={{card:"green", label:"white"}} label="Pay-per-click advertising" image="/card/tokyo-selecting-a-value-in-the-browser-window.svg"/>
        </div>
        <div className="w-full flex flex-row gap-10">
          <Card property={{card:"dark", label:"white"}} label="Social Media Marketing" image="/card/tokyo-browser-window-with-emoticon-likes-and-stars-around.svg"/>
          <Card property={{card:"grey", label:"green"}} label="Email Marketing" image="/card/tokyo-sending-messages-from-one-place-to-another.svg"/>
        </div>
        <div className="w-full flex flex-row gap-10">
          <Card property={{card:"green", label:"white"}} label="Content Creation" image="/card/tokyo-many-browser-windows-with-different-information.svg"/>
          <Card property={{card:"dark", label:"green"}} label="Pay-per-click advertising" image="/card/tokyo-volumetric-analytics-of-different-types-in-web-browsers.svg"/>
        </div>
      </div>
      {/*CTA block*/}
      <div className="w-full mt-[100px]">
        <div className="w-[1240px] h-[347px] rounded-[45px] flex px-[60px] justify-between items-center bg-grey">
          <div className="flex flex-col gap-[26px]">
            <h3 className="w-[500px]">Let’s make things happen</h3>
            <p className="w-[500px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <Button property="primary" href="/" label="Get your free proposal"/>
          </div>
          <Image src="/cta.svg" width={359} height={394.27} alt="CTA" className="w-auto h-auto pr-[135px]"/>
        </div>
      </div>
      {/*Heading & Sub Heading - Case Study*/}
      <div className="w-full flex flex-row gap-10 mt-[140px] mb-[80px]">
        <Heading property="green" label="Case Studies"/>
        <p className="w-[580px] h-fit">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      {/*Case Study block*/}
      <div className="flex justify-center">
        <div className="rounded-[45px] flex gap-16 px-[60px] py-[70px] bg-dark">
          <div className="flex flex-col gap-5">
            <p className="w-[286px] text-white">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <LinkButton property="simple green" href="/" label="Learn more"/>
          </div>
          <span className="w-px h-[186px] block bg-white"></span>
          <div className="flex flex-col gap-5">
            <p className="w-[286px] text-white">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
            <LinkButton property="simple green" href="/" label="Learn more"/>
          </div>
          <span className="w-px h-[186px] block bg-white"></span><div className="flex flex-col gap-5">
            <p className="w-[286px] text-white">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            <LinkButton property="simple green" href="/" label="Learn more"/>
          </div>
        </div>
      </div>
      {/*Heading & Sub Heading - Our Working Process*/}
      <div className="w-full flex flex-row gap-10 mt-[140px] mb-[80px]">
        <Heading property="green" label="Our Working Process"/>
        <p className="w-[292px] h-fit">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      {/*Process block*/}
      <div className="flex flex-col gap-[30px]">
        <div className="w-[1234px] rounded-[45px] flex flex-col gap-[30px] px-[60px] py-[41px] border border-dark bg-green">
          <div className="w-[1117px] flex justify-between items-center">
            <div className="flex gap-[25px] items-center">
              <h1>01</h1>
              <h3 className="w-[612px]">Consultation</h3>
            </div>
            <PlusIcon property="minus"/>
          </div>
          <span className="w-[1114px] h-px bg-black block"></span>
          <p className="w-[1114px] h-[60px]">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
        </div>
      </div>
    </>
  );
}
