import Image from "next/image"
import Button from "../components/Button"
import link from "../info/link"

export default function CTA() {
    return (
        <>
            {/*CTA block*/}
            <div className="w-full h-[347px] rounded-[45px] flex px-[60px] mt-[100px] justify-between items-center bg-grey">
                <div className="flex flex-col gap-[26px]">
                <h3 className="w-[500px]">Let’s make things happen</h3>
                <p className="w-[500px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <Button property="primary" href={link.contactus} label="Get your free proposal"/>
                    </div>
                <Image src="/cta.svg" width={359} height={394.27} alt="CTA" className="w-auto h-auto pr-[135px]"/>
            </div>
        </>
    )
}