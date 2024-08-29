import Heading from "./Heading";
import { ReactNode } from "react";

export default function HeadingAndSubHeading({HeadLabel, SubHeadLabel}: {HeadLabel: string, SubHeadLabel: ReactNode}) {
    return (
        <>
            <div className="w-full flex flex-row gap-10 mb-[80px]">
                <Heading property="green" label={HeadLabel}/>
                {SubHeadLabel}
            </div>    
        </>
    )
}