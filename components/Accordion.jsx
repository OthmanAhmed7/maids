"use client";

import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { HiMinusCircle } from "react-icons/hi";

const Accordion = (props) => {
  const [toggleFaq, setToggleFaq] = useState(props.toggle_faq || false);

  function toggle() {
    setToggleFaq(!toggleFaq);
  }

  return (
    <div>
      <div className="w-[800px]">
        <div
          className="flex items-center justify-between my-[1rem] cursor-pointer"
          onClick={toggle}
        >
          <h3 className="text-[1.4rem] font-[600] text-main-font">
            {props.question}
          </h3>
          {toggleFaq ? (
            <HiMinusCircle className="w-[30px] h-[30px] text-main-font" />
          ) : (
            <FaCirclePlus className="w-[24px] h-[24px] text-main-font" />
          )}
        </div>
        {toggleFaq && (
          <div>
            <p className="text-slate-500 mb-[1rem]">{props.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
