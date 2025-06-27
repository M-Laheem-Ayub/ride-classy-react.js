import React from "react";

const CustomParagraph = ({ paragraph="" }) => {

  return (
    <div className="ps-2.5 md:ps-9 pb-7 pe-2.5 md:pe-9">
      <h4 className="text-[#575757] leading-loose text-[14.6px] md:text-base font-sans ">
        {paragraph}
      </h4>
    </div>
  );
};

export default CustomParagraph;
