import React from "react";
import InnerHeroOne from "@/components/custom/Global/InnerHeroOne";
import DetailCard from "@/components/custom/Services/CreditBuilder/DetailCard";
import CbStepTwo from "@/components/custom/Services/CreditBuilder/CbStepTwo";

const CreditBuilder = () => {
  return (
    <div>
      <InnerHeroOne
        bgImgUrl="/global/banners/orange-gradient.jpg"
        title="Credit Builder"
        subtitle="We will help you to build your credit score!"
        ctaText=""
      />

      <div className="flex flex-col justify-center xl:flex-row">
        <div className="flex flex-1 mx-auto px-[20px]  justify-center w-full py-8 ">
          <DetailCard />
        </div>

        <div className="flex  flex-1 mx-auto py-4 px-[20px] max-w-[620px] mt-8">
          <CbStepTwo />
        </div>

        <div className="flex flex-1 max-w-[620px] w-full  2xl:block"></div>
      </div>
    </div>
  );
};

export default CreditBuilder;
