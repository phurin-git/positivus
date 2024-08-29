import HeadingAndSubHeading from "../components/HeadingAndSubHeading"
import WorkingProcessCard from "../components/WorkingProcessCard"

export default function WorkingProcess() {
    return (
        <div className="pt-[70px] mt-[70px]">
            <HeadingAndSubHeading HeadLabel="Our Working Process" SubHeadLabel={<p className="292px">Step-by-Step Guide to Achieving Your Business Goals</p>}/>
            {/*Process block*/}
            <div className="w-full flex flex-col gap-[30px]">
                <WorkingProcessCard orderNo={1} label="Consultation" textContent="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."/>
                <WorkingProcessCard orderNo={2} label="Research and Strategy Development" textContent="Based on the information gathered during the consultation, we will develop a comprehensive digital marketing strategy that outlines the tactics and channels we will use to achieve your goals. This strategy will be customized to your business and target audience."/>
                <WorkingProcessCard orderNo={3} label="Implementation" textContent="Once the strategy is approved, we will begin implementing the tactics outlined in the plan. This may include website development, content creation, social media management, and other digital marketing services."/>
                <WorkingProcessCard orderNo={4} label="Monitoring and Optimization" textContent="Throughout the campaign, we will monitor the performance of our efforts and make adjustments as needed to optimize results. This may include A/B testing, keyword optimization, and other tactics to improve performance."/>
                <WorkingProcessCard orderNo={5} label="Reporting and Communication" textContent="At the end of the campaign, we will provide a detailed report that outlines the results of our efforts, including key performance indicators and metrics. This will allow you to see the impact of our work and make informed decisions for future campaigns."/>
                <WorkingProcessCard orderNo={6} label="Continual Improvement" textContent="We believe in continual improvement and will work with you to refine our strategies and tactics based on the results of our campaigns. This will ensure that we are always delivering the best possible results for your business."/>
            </div>
        </div>
    )
}