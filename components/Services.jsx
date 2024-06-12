import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="service">
      <div className="max-w-[1200px] mx-auto py-[5rem] px-[2rem] xl:px-0 flex flex-col items-center">
        <h1 className="text-[2rem] font-[650] text-main-font">
          Our <span className="highlight">Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-[3rem] mt-[4rem]">
          <div className="flex flex-col items-center max-w-[265px] hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image src="/img/dishes.svg" width={80} height={80} alt="dishes" />

            <h1 className="mt-[1rem] text-[1.5rem] font-[600] text-main-font">
              Dishes
            </h1>

            <p className="text-center text-slate-500 mt-[.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia ad voluptate. Officiis unde repellendus odio
              perspiciatis. Cumque suscipit aut, aspernatur dolore earum est
              deleniti non quo consequuntur assumenda.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[265px] hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image src="/img/vacuum.svg" width={80} height={80} alt="vacuum" />

            <h1 className="mt-[1rem] text-[1.5rem] font-[600] text-main-font">
              Vacuuming
            </h1>

            <p className="text-center text-slate-500 mt-[.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia ad voluptate. Officiis unde repellendus odio
              perspiciatis. Cumque suscipit aut, aspernatur dolore earum est
              deleniti non quo consequuntur assumenda.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[265px] hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image
              src="/img/washing.svg"
              width={80}
              height={80}
              alt="washing"
            />

            <h1 className="mt-[1rem] text-[1.5rem] font-[600] text-main-font">
              Washing
            </h1>

            <p className="text-center text-slate-500 mt-[.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia ad voluptate. Officiis unde repellendus odio
              perspiciatis. Cumque suscipit aut, aspernatur dolore earum est
              deleniti non quo consequuntur assumenda.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[265px] hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image
              src="/img/cooking.svg"
              width={80}
              height={80}
              alt="cooking"
            />

            <h1 className="mt-[1rem] text-[1.5rem] font-[600] text-main-font">
              Cooking
            </h1>

            <p className="text-center text-slate-500 mt-[.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia ad voluptate. Officiis unde repellendus odio
              perspiciatis. Cumque suscipit aut, aspernatur dolore earum est
              deleniti non quo consequuntur assumenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
