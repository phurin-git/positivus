import Image from "next/image";
import clsx from "clsx";

export default function Logo({property}:{property?: string}) {
    return (
        <Image src="/logo.svg" alt="" width={219.54} height={36} priority className={clsx(
            "w-auto h-auto",
            {
                "filter invert": property === 'white',
            }
        )}/>        
    );
}