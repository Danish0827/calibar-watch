import React from "react";
import BreadCrumb from "../BreadCrumbSaif/BreadCrumb";
import AboutSection1 from "./AboutSection1";
import OurJourney from "./OurJourneySection";
import OurTeamSection from "./OurTeamSection";
import EveryMomentMatters from "../EveryMomentMatters/EveryMomentMatters";
import OurJourneyReverse from "./OurJourneyReverse";

const AboutUsPage = () => {
  return (
    <>
      <BreadCrumb
        title={"About Us"}
        page={"About us"}
        image1="/images/slide3.webp"
      />
      <EveryMomentMatters />
      <AboutSection1 />
      <OurJourney />
      <OurTeamSection />
      <OurJourneyReverse />
    </>
  );
};

export default AboutUsPage;
