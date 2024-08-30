import Link from "next/link";
import Image from "next/image";
import Logo from "../ui/Logo";
import link from "../info/link";

export default function Footer() {
    return (
        <>
            <div className="w-full rounded-t-[45px] flex flex-col gap-[50px] px-[60px] pt-[55px] pb-[50px] mt-[140px] bg-dark text-white">
                <div className="flex flex-col gap-[66px]">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[180px]"><Logo property="white"/></div>
                        <div className="flex gap-10">
                            <Link href={link.aboutus} className="font-normal text-lg underline">About us</Link>
                            <Link href={link.services} className="font-normal text-lg underline">Services</Link>
                            <Link href={link.usecases} className="font-normal text-lg underline">Use Cases</Link>
                            <Link href={link.pricing} className="font-normal text-lg underline">Pricing</Link>
                            <Link href={link.blog} className="font-normal text-lg underline">Blog</Link>
                        </div>
                        <div className="flex gap-5">
                            <Link href="https://linkedin.com/"><Image src="/social_icon/linkedin.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                            <Link href="https://facebook.com/"><Image src="/social_icon/facebook.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                            <Link href="https://twitter.com/"><Image src="/social_icon/twitter.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col gap-[27px]">
                            <h4 className="w-fit rounded-[7px] px-[7px] bg-green text-black">Contact us:</h4>
                            <div className="flex flex-col gap-5">
                                <p>Email: info@positivus.com</p>
                                <p>Phone: 555-567-8901</p>
                                <p>Address: 1234 Main St
                                Moonstone City, Stardust State 12345</p>
                            </div>
                        </div>
                        <form className="flex rounded-[14px] gap-5 px-10 py-[58px] bg-[#292A32]">
                            <input type="email" placeholder="Email" className="w-[285px] rounded-[14px] px-[35px] py-[22px] border border-white text-white bg-inherit" required/>
                            <button type="submit" className="rounded-[14px] px-[35px] py-5 bg-green text-black">Subscribe to news</button>
                        </form>
                    </div>
                    <div className="w-full flex flex-col gap-[50px]">
                        <span className="w-full h-px block bg-white"></span>
                        <div className="flex gap-10">
                            <span className="text-lg">© 2023 Positivus. All Rights Reserved.</span>
                            <Link id="privacy-policy" href="/#privacy-policy" className="text-lg underline">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}