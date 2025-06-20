import React from "react";

const Hero = () => {
  return (
    <div className="flex-1">
      <div
        className="relative flex items-center pl-[15px] md:pl-[90px] h-[33vh] md:h-[50vh] lg:h-[66vh]"
        style={{
          backgroundImage: "url('/assets/images/bg-images/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <h3 className="relative z-10 md:w-2/3 sm:w-screen text-4xl lg:text-5xl text-white font-alegreya font-bold text-start pr-0">
          Reliable transfers and chauffeur service in Barcelona & Madrid.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
