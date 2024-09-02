import Link from "next/link";
import Image from "next/image";
import Logo from "../ui/Logo";
import link from "../info/link";

export default function Footer() {
    return (
        <>
            <div className="sm:rounded-t-[45px] flex flex-col gap-[37px] sm:gap-[50px] px-[20px] sm:px-[60px] pt-[50px] sm:pt-[55px] pb-[30px] sm:pb-[50px] mt-[90px] sm:mt-[140px] max-sm:-mx-[20px] bg-dark text-white">
                <div className="flex flex-col gap-[37px] sm:gap-[66px]">
                    <div className="w-full flex flex-col sm:flex-row max-sm:gap-[37px] justify-between items-center">
                        <div className="w-[144px] sm:w-[180px]"><Logo property="white"/></div>
                        <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-10 items-center font-normal text-lg sm:underline">
                            <Link href={link.aboutus}>About us</Link>
                            <Link href={link.services}>Services</Link>
                            <Link href={link.usecases}>Use Cases</Link>
                            <Link href={link.pricing}>Pricing</Link>
                            <Link href={link.blog}>Blog</Link>
                        </div>
                        <div className="max-sm:hidden flex gap-5">
                            <Link href="https://linkedin.com/"><Image src="/social_icon/linkedin.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                            <Link href="https://facebook.com/"><Image src="/social_icon/facebook.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                            <Link href="https://twitter.com/"><Image src="/social_icon/twitter.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row max-sm:gap-[37px] justify-between">
                        <div className="flex flex-col max-sm:items-center max-sm:text-center gap-[37px] sm:gap-[27px]">
                            <h4 className="w-fit rounded-[7px] px-[7px] bg-green text-black">Contact us:</h4>
                            <div className="flex flex-col gap-5">
                                <p>Email: info@positivus.com</p>
                                <p>Phone: 555-567-8901</p>
                                <p>Address: 1234 Main St<br/>
                                Moonstone City, Stardust State 12345</p>
                            </div>
                        </div>
                        <form className="flex flex-col sm:flex-row rounded-[14px] gap-5 p-[30px] sm:px-10 sm:py-[58px] bg-[#292A32]">
                            <input type="email" placeholder="Email" className="sm:w-[285px] rounded-[14px] px-[35px] py-[22px] border border-white text-white bg-inherit" required/>
                            <button type="submit" className="rounded-[14px] px-[35px] py-5 bg-green text-black">Subscribe to news</button>
                        </form>
                        <div className="sm:hidden flex gap-5 justify-center">
                            <Link href="https://linkedin.com/"><Image src="/social_icon/linkedin.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                            <Link href="https://facebook.com/"><Image src="/social_icon/facebook.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                            <Link href="https://twitter.com/"><Image src="/social_icon/twitter.svg" alt="" width={1} height={1} className="w-auto h-auto"/></Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-[50px]">
                        <span className="w-full h-px block bg-white"></span>
                        <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-10 items-center">
                            <span className="text-lg">© 2023 Positivus. All Rights Reserved.</span>
                            <Link id="privacy-policy" href="/#privacy-policy" className="text-lg sm:underline">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}