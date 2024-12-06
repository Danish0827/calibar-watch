import AboutDescription from "@/components/AboutDescription/AboutDescription";
import ContactSectionHome from "@/components/ContactSectionHome/ContactSectionHome";
import HomeBanner from "@/components/HomeSlider/HomeBanner";
import NewArrivalSection from "@/components/NewArrivalSection/NewArrivalSection";
import OurBrands from "@/components/OurBrands/OurBrands";
import TimelessAndIconicSection from "@/components/TimelessAndIconicSection/TimelessAndIconicSection";
import TrendingNowSection from "@/components/TrendingNowSection/TrendingNowSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Caliber Star Watches",
  description:
    "Explore our premium collection of luxury watches, designed for precision, style, and elegance.",
};

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurBrands />
      <NewArrivalSection />
      <TrendingNowSection />
      <ContactSectionHome />
      <TimelessAndIconicSection />
      {/* <AboutDescription /> */}
    </>
  );
}
