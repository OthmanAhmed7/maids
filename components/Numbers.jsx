"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Numbers = () => {
  const [counterTrigger, setCounterTrigger] = useState(false);

  return (
    <section>
      <ScrollTrigger
        onEnter={() => setCounterTrigger(true)}
        onExit={() => setCounterTrigger(false)}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1rem] items-center justify-around pb-[5rem]">
          <div className="flex flex-col items-center">
            {counterTrigger && (
              <h1 className="text-[2.5rem] font-[700] text-main-font">
                <CountUp duration={4} start={0} end={15}></CountUp>
              </h1>
            )}
            <h1 className="font-[500] text-slate-500 tracking-[.08rem]">
              States
            </h1>
          </div>

          <div className="flex flex-col items-center">
            {counterTrigger && (
              <h1 className="text-[2.5rem] font-[700] text-main-font">
                +<CountUp duration={4} start={0} end={500}></CountUp>K
              </h1>
            )}
            <h1 className="font-[500] text-slate-500 tracking-[.08rem]">
              Downloads
            </h1>
          </div>

          <div className="flex flex-col items-center">
            {counterTrigger && (
              <h1 className="text-[2.5rem] font-[700] text-main-font">
                <CountUp duration={4} start={0} end={99}></CountUp>%
              </h1>
            )}
            <h1 className="font-[500] text-slate-500 tracking-[.08rem]">
              Satisfaction
            </h1>
          </div>

          <div className="flex flex-col items-center">
            {counterTrigger && (
              <h1 className="text-[2.5rem] font-[700] text-main-font">
                <CountUp
                  duration={4}
                  start={0}
                  end={4.8}
                  decimal="."
                  decimals={1}
                ></CountUp>
              </h1>
            )}
            <h1 className="font-[500] text-slate-500 tracking-[.08rem]">
              Rating
            </h1>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Numbers;
