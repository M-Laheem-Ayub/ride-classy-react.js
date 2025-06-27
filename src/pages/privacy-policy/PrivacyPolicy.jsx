import React, { useEffect } from "react";
import PageTitle from "../../components/page-title/PageTitle";
import CustomHeading from "../../components/custom-heading/CustomHeading";
import CustomParagraph from "../../components/custom-paragraph/CustomParagraph";
import ListWithBullets from "../../components/list-with-bullets/ListWithBullets";

import {
  privacyPolicy,
  consent,
  infoWeCollect,
  logFiles,
  cookiesAndWebBeacons,
  advertisingPartners,
  thirdParty,
  ccpa,
  gdpr,
  childrenInfo,
  ways
} from "../../data/privacyPolicyData";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - RideClassy";
  }, []);

  return (
    <div className="bg-white">
      <main className="pb-12">
        <PageTitle pageTitle={"Privacy Policy"} />
      {privacyPolicy.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"Consent"} />
      {consent.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"Information we collect"} />
      {infoWeCollect.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"How we use your information"} />
      <CustomParagraph paragraph="We use the information we collect in various ways, including to:" />
      <ListWithBullets contentData={ways} />
      <CustomHeading heading={"Log Files"} />
      {logFiles.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"Cookies and Web Beacons"} />
      {cookiesAndWebBeacons.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"Advertising Partners Privacy Policies"} />
      {advertisingPartners.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"Third Party Privacy Policies"} />
      {thirdParty.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading={"CCPA Privacy Rights (Do Not Sell My Personal Information)"} />
      <CustomParagraph paragraph="Under the CCPA, among other rights, California consumers have the right to:" />
      {ccpa.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading="GDPR Data Protection Rights" />
      <CustomParagraph paragraph="We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:" />
      {gdpr.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      <CustomHeading heading="Children’s Information" />
      {childrenInfo.map((para, index) => (
        <CustomParagraph key={index} paragraph={para} />
      ))}
      </main>
    </div>
  );
};

export default PrivacyPolicy;
