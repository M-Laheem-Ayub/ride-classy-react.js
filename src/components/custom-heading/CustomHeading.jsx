import React from "react";

const CustomHeading = ({ heading="" }) => {

  return (
    <div className="">
      <h4 className="text-lg sm:text-[21.5px] md:text-[28px] pe-3 text-[#575757] font-extrabold ps-2.5 md:ps-9 font-playfair">
        {heading}
      </h4>
    </div>
  );
};

export default CustomHeading;
