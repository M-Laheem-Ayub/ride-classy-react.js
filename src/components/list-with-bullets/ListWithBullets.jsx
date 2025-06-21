import React from "react";

const ListWithBullets = ({contentData}) => {
  return (
    <div className="mb-10">
     {contentData.map((item, index) => (
    <div key={index} className="flex">
      <span className="text-[#575757] mr-2 -mt-1.5 ps-10 md:ps-16 text-2xl ">•</span>
      <span className=" flex-1 text-[14.6px] text-[#575757] leading-relaxed pe-12">
        <span className="font-semibold">{item.title}</span> {item.text}
      </span>
    </div>
  ))}
    </div>
  );
};

export default ListWithBullets;
