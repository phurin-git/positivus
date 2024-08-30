import clsx from 'clsx';

export default function Heading({property, label}:{property:string, label: string}) {
    return (
        <h2 className={clsx(
            "w-fit h-fit rounded-[7px] px-[7px]",
            {
                "bg-green": property === "green",
                "bg-white": property === "white",
                "bg-black text-white": property === "black",
            }
        )}>{label}</h2>
    )
}