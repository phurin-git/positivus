import Heading from "./Heading";
import { ReactNode } from "react";

export default function HeadingAndSubHeading({headLabel, subHeadLabel, subHeadWidth}: {headLabel: string, subHeadLabel: string, subHeadWidth: number | string}) {
    return (
        <>
            <div className="w-full flex flex-row gap-10 mb-[80px]">
                <Heading property="green" label={headLabel}/>
                <p style={{width: subHeadWidth}}>{subHeadLabel}</p>
            </div>    
        </>
    )
}