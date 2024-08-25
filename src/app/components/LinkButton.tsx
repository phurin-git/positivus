import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function LinkButton({property, href, label}:{property: string, href: string, label: string}) {
    return (
        <Link href={href} className={clsx(
            "font-normal text-xl flex w-fit items-center gap-[15px]",
            {
                "text-white": ["white", "white2", "green2"].includes(property),
                "text-black": ["black", "black2", "green"].includes(property),
                "text-white flex-row-reverse": property === "simple white",
                "text-black flex-row-reverse": property === "simple black",
                "text-green flex-row-reverse": property === "simple green",
            }
        )}>
            <Image src={`/link_button_icon/${property.replace(" ", "_")}.svg`} width={property.split(" ").includes("simple") ? 17.32 : 41} height={property.split(" ").includes("simple") ? 10 : 41} alt="" />
            <span>{label}</span>
        </Link>
    )
}