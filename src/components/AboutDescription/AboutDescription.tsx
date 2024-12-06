import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const AboutDescription = () => {
  return (
    <div>
      <Wrapper>
        <div className="px-4 pb-16  mx-auto max-w-[1000px]">
          <h4 className="md:text-5xl text-2xl font-semibold text-center ">
            Premium Watches from Calibar Star Watches
          </h4>
          <p className="mt-8 md:text-[18px] text-base text-justify">
            Just Watches has become synonymous with prestige and luxury and has
            since grown to be the largest independent, Timex Group owned watch
            store in the country.
          </p>
          <p className="mt-4 md:text-[18px] text-base text-justify ">
            {" "}
            Whether you shop online or at one of our stores, rest assured in
            knowing that we are Official Authorized Retailer for all the brands
            that we offer and every watch comes with the Manufacturer warranty
            supported with all documents, thereby making the watch 100%
            Authentic....{" "}
            <span className="border border-black px-1 ">Read More</span>
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutDescription;
