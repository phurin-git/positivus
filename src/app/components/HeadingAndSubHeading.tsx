import Heading from "./Heading";

export default function HeadingAndSubHeading({HeadLabel, SubHeadLabel, SubWidth}: {HeadLabel: string, SubHeadLabel: string, SubWidth: string}) {
    return (
        <>
            <div className="w-full flex flex-row gap-10 mb-[80px]">
                <Heading property="green" label={HeadLabel}/>
                <p className={`w-[${SubWidth}] h-fit`}>{SubHeadLabel}</p>
            </div>    
        </>
    )
}