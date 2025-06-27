import React from "react";
import { useEffect } from "react";
import PageTitle from "../../../components/page-title/PageTitle";
import HeadingWithParagraph from "../../../components/heading-with-paragraph/HeadingWithParagraph";
import ListWithBullets from "../../../components/list-with-bullets/ListWithBullets";
import { CorporateHireData } from "../../../data/CorporateHireData";
import { whyChooseCorporateHire } from "../../../data/whyChooseCorporateHire";

const CorporateHire = () => {
  useEffect(() => {
    document.title = "Professional Corporate Transportation Services - RideClassy";
  }, []);

  return (
    <div className="flex flex-col md:text-base text-[14.6px] bg-white">
      <main className="max-w-screen-xl md:text-base text-[14.6px]">
        <PageTitle pageTitle={"Professional Corporate Transportation Services"} />

        <HeadingWithParagraph contentData={CorporateHireData} endIndex={2} />
        <h3 className="text-[21.5px] md:text-2xl font-roboto -mt-4 ps-2.5 md:ps-9 pe-3 md:pe-9">
          <strong>
            Why Choose RideClassy for Your Corporate Transportation in Barcelona and Madrid?
          </strong>
        </h3>
        <ListWithBullets contentData={whyChooseCorporateHire} />
        <HeadingWithParagraph contentData={CorporateHireData} startIndex={3} />
      </main>
    </div>
  );
};

export default CorporateHire;
