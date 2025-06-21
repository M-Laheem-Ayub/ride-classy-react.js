import React from "react";

const HeadingWithParagraph = ({ contentData, startIndex = 0, endIndex }) => {
  // agar endIndex diya gaya ha to data ko trim kar lo
  const slicedData = endIndex ? contentData.slice(startIndex, endIndex) : contentData.slice(startIndex);

  return (
    <div className="my-5">
      {slicedData.map((item, index) => (
        <section
          key={startIndex + index}
          className="mb-8 text-start ps-2.5 md:ps-9 pe-3 md:pe-9"
        >
          <h3 className="text-[21.5px] md:text-2xl font-roboto mb-1 pe-3">
            <strong>{item.heading}</strong>
          </h3>
          <p
            style={{ lineHeight: 1.8 }}
            className="text-[#575757] leading-loose text-[14.6px] md:text-base font-sans"
            dangerouslySetInnerHTML={{ __html: item.paragraph }}
          ></p>
        </section>
      ))}
    </div>
  );
};

export default HeadingWithParagraph;
