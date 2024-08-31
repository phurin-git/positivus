import Image from "next/image"
import HeadingAndSubHeading from "../ui/HeadingAndSubHeading"
import link from "../info/link"

export default function Contact() {
    return (
        <div id={link.contactus.substring(1)} className="pt-[30px] sm:pt-[70px] mt-[30px] sm:mt-[70px]">
            <HeadingAndSubHeading headLabel="Contact Us" subHeadLabel="Connect with Us: Let's Discuss Your Digital Marketing Needs" subHeadWidth={323}/>
            <div className="w-full rounded-[45px] flex justify-between p-10 sm:pr-0 sm:pl-[100px] sm:pt-[60px] sm:pb-[80px] bg-grey overflow-hidden">
                <form className="w-full flex flex-col gap-9 sm:gap-10">
                    <div className="flex gap-[35px]">
                        <div className="flex items-center gap-[14px]">
                            <input id="say-hi-radio-checkbox" type="radio" name="contact-us"
                            className="w-7 h-7 appearance-none rounded-full border border-black ring-inset ring-[6px] ring-white bg-white checked:bg-green" defaultChecked/>
                            <label htmlFor="say-hi-radio-checkbox"><p>Say Hi</p></label>
                        </div>
                        <div className="flex items-center gap-[14px]">
                            <input id="get-a-quote-radio-checkbox" type="radio" name="contact-us" className="w-7 h-7 appearance-none rounded-full border border-black ring-inset ring-[6px] ring-white bg-white checked:bg-green"/>
                            <label htmlFor="get-a-quote-radio-checkbox"><p>Get a Quote</p></label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 sm:gap-[25px]">
                        {/*Name*/}
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="name"><span className="text-[16px] leading-7">Name</span></label>
                            <input id="name" type="text" placeholder="Name" className="w-full sm:w-[556px] rounded-[14px] px-[30px] py-[18px] bg-white border border-black"/>
                        </div>
                        {/*Email*/}
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="email"><span className="text-[16px] leading-7">Email*</span></label>
                            <input id="email" type="email" placeholder="Email" required className="w-full sm:w-[556px] rounded-[14px] px-[30px] py-[18px] bg-white border border-black"/>
                        </div>
                        {/*Message*/}
                        <div className="flex flex-col gap-[5px]">
                            <label htmlFor="message"><span className="text-[16px] leading-7">Message*</span></label>
                            <textarea id="message" placeholder="Message" required={true} className="w-full sm:w-[556px] h-[132px] sm:h-[190px] rounded-[14px] px-[30px] py-[18px] bg-white border border-black resize-none"/>
                        </div>
                    </div>
                    <button className="w-full sm:w-[556px] rounded-[14px] bg-dark text-white px-[35px] py-[20px]">Send Message</button>
                </form>
                <Image src="/contact.svg" alt="" width={1} height={1} className="max-sm:hidden w-auto h-auto -mr-[325px]"></Image>
            </div>
        </div>
    )
}