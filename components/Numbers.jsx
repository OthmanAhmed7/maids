"use client";

import React from "react";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto flex items-center justify-around pb-[2rem]">
        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] font-[700] text-main-font">
            <CountUp start={0} end={15}></CountUp>
          </h1>
          <h1 className="font-[600] text-main-font tracking-[.08rem]">
            States
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] font-[700] text-main-font">
            +<CountUp start={0} end={500}></CountUp>K
          </h1>
          <h1 className="font-[600] text-main-font tracking-[.08rem]">
            Downloads
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] font-[700] text-main-font">
            <CountUp start={0} end={99}></CountUp>%
          </h1>
          <h1 className="font-[600] text-main-font tracking-[.08rem]">
            Satisfaction
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] font-[700] text-main-font">
            <CountUp start={0} end={4.8} decimal="," decimals={1}></CountUp>
          </h1>
          <h1 className="font-[600] text-main-font tracking-[.08rem]">
            Rating
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
