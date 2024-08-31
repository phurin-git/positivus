import Image from "next/image";
export default function PlusIcon({property="plus"}:{property:string}) {
    return ( 
        <>
            { property === "plus" && <Image src="/plus_icon/plus.svg" width={58} height={58} alt="" className="w-auto h-auto"/>}
            { property === "minus" && <Image src="/plus_icon/minus.svg" width={58} height={58} alt="" className="w-auto h-auto"/>}
        </>
    )
}