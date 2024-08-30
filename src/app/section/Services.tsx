import HeadingAndSubHeading from "../ui/HeadingAndSubHeading"
import ServiceCard from "../ui/Services/Card"
import link from "../info/link"

export default function Services() {
    return (
        <div id={link.services.substring(1)} className="w-full pt-[70px] mt-[70px]">
            {/*Heading & Sub Heading - Services*/}
            <HeadingAndSubHeading headLabel="Services" subHeadLabel="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" subHeadWidth={580}/>
            {/*Service Cards*/}
            <div className="w-full grid grid-cols-2 gap-10">
                <ServiceCard property={{card:"grey", label:"green"}} label="Search engine optimization" image="/card/tokyo-magnifier-web-search-with-elements.svg"/>
                <ServiceCard property={{card:"green", label:"white"}} label="Pay-per-click advertising" image="/card/tokyo-selecting-a-value-in-the-browser-window.svg"/>
                <ServiceCard property={{card:"dark", label:"white"}} label="Social Media Marketing" image="/card/tokyo-browser-window-with-emoticon-likes-and-stars-around.svg"/>
                <ServiceCard property={{card:"grey", label:"green"}} label="Email Marketing" image="/card/tokyo-sending-messages-from-one-place-to-another.svg"/>
                <ServiceCard property={{card:"green", label:"white"}} label="Content Creation" image="/card/tokyo-many-browser-windows-with-different-information.svg"/>
                <ServiceCard property={{card:"dark", label:"green"}} label="Pay-per-click advertising" image="/card/tokyo-volumetric-analytics-of-different-types-in-web-browsers.svg"/>
            </div>
        </div>
    )
}