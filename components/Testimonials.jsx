import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="max-w-[1200px] mx-auto pb-[5rem] flex flex-col items-center">
        <h1 className="text-[2rem] font-[650] text-main-font highlight mb-[4rem]">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] px-[2rem] xl:px-0">
          <div className="flex flex-col items-center hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image
              src="/img/1.jpg"
              width={50}
              height={50}
              alt="man"
              className="w-[5rem] h-[5rem] rounded-full"
            />

            <h1 className="text-[1.3rem] font-[600] text-main-font mt-[.6rem]">
              Muhammed Sayed
            </h1>

            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="lg:max-w-[83rem] max-w-[600px] text-center mt-[.5rem] text-slate-500">
              Lorem ipsum dolor sit amet consetur, adipisicing elit. Sit
              doloremque eum eveniet animi, vero, beatae modi aspernatur
              eligendi ipsa sed a fugit delectus facilis voluptates blanditiis
              similique cumque? Deleniti, soluta.
            </p>
          </div>

          <div className="flex flex-col items-center hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image
              src="/img/2.jpeg"
              width={50}
              height={50}
              alt="man"
              className="w-[5rem] h-[5rem] rounded-full"
            />

            <h1 className="text-[1.3rem] font-[600] text-main-font mt-[.6rem]">
              Wael El-Komy
            </h1>

            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="lg:max-w-[83rem] max-w-[600px] text-center mt-[.5rem] text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              doloremque eum eveniet animi, vero, beatae modi aspernatur
              eligendi ipsa sed a fugit delectus facilis voluptates blanditiis
              similique cumque? Deleniti, soluta.
            </p>
          </div>

          <div className="flex flex-col items-center hover:shadow-lg p-[1rem] rounded-[.8rem] transition ease-in-out duration-500 hover:scale-110">
            <Image
              src="/img/3.jpg"
              width={50}
              height={50}
              alt="man"
              className="w-[5rem] h-[5rem] rounded-full"
            />

            <h1 className="text-[1.3rem] font-[600] text-main-font mt-[.6rem]">
              Maher Akram
            </h1>

            <div className="flex gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="lg:max-w-[83rem] max-w-[600px] text-center mt-[.5rem] text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              doloremque eum eveniet animi, vero, beatae modi aspernatur
              eligendi ipsa sed a fugit delectus facilis voluptates blanditiis
              similique cumque? Deleniti, soluta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
