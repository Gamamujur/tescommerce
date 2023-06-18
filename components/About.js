import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };
  return (
    <>
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      <div className="w-full p-4 h-fit bg-neutral-700" id="about">
        <h1 className="text-center text-5xl text-gray-200 lg:text-[50pt] font-mons mt-10">
          About Us
        </h1>
        <div className="flex flex-col justify-center w-full mt-20 mb-32 lg:flex-row">
          <div className="text-gray-100 text-center mt-20 font-mons tracking-wider text-[40pt] lg:w-[30%]">
            {isVisible ? (
              <CountUp start={0} end={100} duration={1} />
            ) : (
              <span>0</span>
            )}
            <span>+</span>
            <h1 className="text-2xl text-slate-100">Products</h1>
          </div>

          <div className="text-slate-100 text-center mt-20 font-mons tracking-wider text-[40pt] lg:w-[30%]">
            {isVisible ? (
              <CountUp start={0} end={500} duration={1} />
            ) : (
              <span>0</span>
            )}
            <span>+</span>
            <h1 className="text-2xl text-slate-100">Happy Consumers</h1>
          </div>

          <div className="text-gray-100 text-center mt-20 font-mons tracking-wider text-[40pt] lg:w-[30%]">
            {isVisible ? (
              <CountUp start={0} end={1000} duration={1} />
            ) : (
              <span>0</span>
            )}
            <span>+</span>
            <h1 className="text-2xl text-slate-100">High Quality Merchants</h1>
          </div>
        </div>

      </div>
    </VisibilitySensor>
    </>
  );
};

export default About;
