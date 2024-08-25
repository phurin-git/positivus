import Image from "next/image";
import clsx from "clsx";
export default function PlusIcon({property}:{property:string}) {
    return (
        <Image src={clsx(
            {
                "/plus_icon.svg": property === "plus",
                "/minus_icon.svg": property === "minus",
            }
        )} width={58} height={58} alt="plus icon" />
    )
}