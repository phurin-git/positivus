import Landing from "./section/Landing";
import Services from "./section/Services";
import CTA from "./section/CTA";
import CaseStudies from "./section/CaseStudies";
import WorkingProcess from "./section/WorkingProcess";
import Team from "./section/Team";
import Testimonials from "./section/Testimonials";
import Footer from "./section/Footer";
import Contact from "./section/Contact";

export default function Home() {
  return (
    <>
      <Landing />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
