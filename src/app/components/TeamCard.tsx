import Image from "next/image"
import Link from "next/link"

export default function TeamCard({src, name, position, description}: {src: string, name: string, position: string, description: string}) {
    return (
        <div className="w-full flex rounded-[45px] px-[35px] py-10 border border-dark bg-white drop-shadow-[0px_5px]">
            <div className="w-full flex flex-col gap-7">
                <div className="w-full flex">
                    <div className="w-full flex gap-5 items-end -mr-[34px]">
                        <Image src={src} alt="" width={105.65} height={102.82} className="w-auto h-auto"/>
                        <div>
                            <h4>{name}</h4>
                            <p>{position}</p>
                        </div>
                    </div>
                    <Link href="">
                        <Image src="/social_icon/linkedin-green.svg" alt="" width={34} height={34} className="w-auto h-auto"/>
                    </Link>
                </div>
                <span className="w-full h-px block bg-black"></span>
                <p className="w-full">{description}</p>
            </div>
        </div>
    )
}