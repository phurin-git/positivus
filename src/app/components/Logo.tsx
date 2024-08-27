import Image from "next/image";
import clsx from "clsx";

export default function Logo({property, width=219.54, height=36}:{property?: string, width?: number, height?: number}) {
    return (
        <Image src="/logo.svg" alt="" width={width} height={height} priority className={clsx(
            "w-auto h-auto",
            {
                "filter invert": property === 'white',
            }
        )}/>        
    );
}