import React from "react";

const ListWithBullets = ({ contentData }) => {
  return (
    <div className="mb-10 ps-10 md:ps-16">
      <ul className="list-disc pl-5">
        {contentData.map((item, index) => (
          <li
            key={index}
            className="text-[14.6px] md:text-base text-[#575757] leading-relaxed pe-12"
          >
            <span className="font-semibold">{item.title}</span> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithBullets;
  