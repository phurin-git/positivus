import Image from "next/image"
import Button from "../ui/Button"
import link from "../info/link"

export default function CTA() {
    return (
        <>
            {/*CTA block*/}
            <div className="w-full sm:h-[347px] rounded-[45px] flex px-[60px] max-sm:p-[50px] mt-[71px] sm:mt-[100px] max-sm:gap-5 sm:justify-between items-center bg-grey">
                <div className="w-full sm:w-[500px] flex flex-col gap-[26px]">
                    <h3>Let’s make things happen</h3>
                    <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <Button className="text-center" property="primary" href={link.contactus} label="Get your free proposal"/>
                </div>
                <Image src="/cta.svg" width={1} height={1} alt="CTA" className="max-sm:hidden w-auto h-auto pr-[135px]"/>
            </div>
        </>
    )
}