import React from "react";

const ListWithTitle = ({contentData}) => {
  return (
    <div className="mb-10 ps-2.5 md:ps-9 pe-3 md:pe-9">
     {contentData.map((item, index) => (
    <div key={index} style={{lineHeight:"1.7"}} className="mb-6 ">
      <span className="flex-1 text-[14.6px] md:text-base text-[#575757] leading-relaxed pe-12">
        <span className="font-semibold ">{item.title}</span> {item.text}
      </span>
    </div>
  ))}
    </div>
  );
};

export default ListWithTitle;
