import Image from "next/image"
import clsx from "clsx"
import LinkButton from "../LinkButton"

export default function Card({property, label, href="/", image}:{property: {card:string,label:string}, label: string, href?:string , image: string}) {
    const splitLabel = label.split(" ")
    const secondLineLabel = splitLabel.pop()
    const firstLineLabel = splitLabel.join(" ")
    const labelClassName = clsx(
        "w-fit h-fit rounded-[7px] px-[7px]",
        {
            "bg-white": property.label === "white",
            "bg-green": property.label === "green",
        }
    )
    return (
        <div className={clsx(
            "w-full h-full rounded-[45px] flex justify-between items-center p-[50px] border border-dark drop-shadow-[0px_5px]",
            {
                "bg-grey": property.card === "grey",
                "bg-green": property.card === "green",
                "bg-dark": property.card === "dark",
            }
        )}>
            <div className="w-fit h-fit flex flex-col gap-[93px] justify-center items-start">
                <div>
                    <h3 className={labelClassName}>{firstLineLabel}</h3>
                    <h3 className={labelClassName}>{secondLineLabel}</h3>
                </div>
                <LinkButton property={ property.card === "dark" ? "white2" : "black" } href={href} label="Learn more"/>
            </div>
            <Image src={image} width={1} height={1} alt="Card" className="w-auto h-auto"/>
        </div>
    )
}