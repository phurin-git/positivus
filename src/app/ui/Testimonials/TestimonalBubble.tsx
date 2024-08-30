export default function TestimonalBubble({className=""}:{className?:string}) {
    return (
        <div className={`${className} flex flex-col gap-5`}>
            <div className="relative w-[606px] h-[237.95px] rounded-[45px] border border-green">
                <div className="absolute w-16 h-16 rotate-45 border border-green bg-dark translate-x-[56px] translate-y-[203.95px]"></div>
                <div className="absolute w-full h-full flex  justify-center items-center px-[52px] py-[48px] rounded-[45px] bg-dark">
                    <p>&ldquo;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&rdquo;</p>
                </div>
            </div>
            <div className="mt-[45.25px] ml-[80px]">
                <h4 className="text-green">John Smith</h4>
                <p>Marketing Director at XYZ Corp</p>
            </div>
        </div>
    );
}