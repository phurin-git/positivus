import Heading from "./Heading";

export default function HeadingAndSubHeading({headLabel, subHeadLabel, subHeadWidth}: {headLabel: string, subHeadLabel: string, subHeadWidth: number | string}) {
    return (
        <>
            <div className="w-full flex flex-col sm:flex-row max-sm:items-center gap-[30px] sm:gap-10 mb-[40px] sm:mb-[80px] max-sm:text-center">
                <Heading property="green" label={headLabel}/>
                <p className="sm:hidden">{subHeadLabel}</p>
                <p className="max-sm:hidden" style={{ width: subHeadWidth }}>{subHeadLabel}</p>
            </div>    
        </>
    )
}