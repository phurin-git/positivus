import HeadingAndSubHeading from "../components/HeadingAndSubHeading"

export default function Testimonials() {
    return (
        <div className="pt-[70px] mt-[70px]">
            <HeadingAndSubHeading HeadLabel="Testimonials" SubHeadLabel="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" SubWidth="473px"/>
            <div className="w-full h-[625px] rounded-[45px] bg-dark text-white">
                <div className="mt-[84px] flex flex-col justify-center gap-[124px]"></div>
            </div>
        </div>
    )
}