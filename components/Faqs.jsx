import React from "react";
import { paragraph } from "@/lib/data";
import Accordion from "./Accordion";

const Faqs = () => {
  return (
    <section id="faq">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center py-[5rem]">
        <h1 className="text-[2rem] font-[650] text-main-font highlight mb-[3rem]">
          FAQs
        </h1>
        <div className="">
          <div className="divide-y">
            {paragraph.map((index) => (
              <Accordion
                key={index}
                answer={index.answer}
                question={index.question}
                toggle_faq={index.toggle_faq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
