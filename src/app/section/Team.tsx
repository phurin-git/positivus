import Button from "../components/Button"
import HeadingAndSubHeading from "../components/HeadingAndSubHeading"
import TeamCard from "../components/TeamCard"
import link from "../info/link"

export default function Team() {
    return (
        <div id={link.team.substring(1)} className="pt-[70px] mt-[70px]">
            <HeadingAndSubHeading HeadLabel="Team" SubHeadLabel="Meet the skilled and experienced team behind our successful digital marketing strategies" SubWidth="473px"/>
            <div className="grid grid-cols-3 gap-10">
                <TeamCard src="/team_profile_image/John_Smith.svg" name="John Smith" position="CEO and Founder" description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"/>
                <TeamCard src="/team_profile_image/Jane_Doe.svg" name="Jane Doe" position="Director of Operations" description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"/>
                <TeamCard src="/team_profile_image/Michael_Brown.svg" name="Michael Brown" position="Senior SEO Specialist" description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"/>
                <TeamCard src="/team_profile_image/Emily_Johnson.svg" name="John Smith" position="PPC Manager" description="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"/>
                <TeamCard src="/team_profile_image/Brian_Williams.svg" name="Brian Williams" position="Social Media Specialist" description="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"/>
                <TeamCard src="/team_profile_image/Sarah_Kim.svg" name="Sarah Kim" position="Content Creator" description="2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"/>
            </div>
            <div className="w-full flex mt-10 justify-end">
                <Button label="See all team" property="primary" href={link.team} />
            </div>
        </div>
    )
}