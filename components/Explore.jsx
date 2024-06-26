import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="w-full gradient-2 mt-[5rem] rounded-tr-[10rem] rounded-bl-[10rem] px-[2rem] xl:px-0">
      <div className="max-w-[1200px] mx-auto py-[6rem] relative flex flex-col items-center">
        <Image
          data-aos="zoom-in"
          data-aos-duration="1000"
          src="/img/phone.png"
          width={400}
          height={400}
          alt="phone image"
          className="absolute top-[-9rem] left-0 md:left-[25%] lg:left-0"
        />

        <h1
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-[2.2rem] xs:mt-[14.5rem] mt-[12rem] md:mt-[18rem] lg:mt-0 font-[700] text-main-font mb-[1.8rem]"
        >
          Explore Our App!
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-delay="200"
          className="max-w-[420px] text-slate-500 text-center"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          cumque ipsum explicabo praesentium distinctio tempore? Eaque aliquam
          in doloribus dolorum sapiente aperiam dolores sit, molestias
          accusantium iure velit harum officiis?
        </p>

        <div className="flex items-center gap-[1rem] mt-[1.5rem]">
          <button>
            <Image
              src="/img/app-store-full.svg"
              width={160}
              height={160}
              alt="app store image"
              className="transition duration-300 ease-in-out hover:scale-110"
            />
          </button>

          <button>
            <Image
              src="/img/google-play-full.svg"
              width={160}
              height={160}
              alt="google play image"
              className="transition duration-300 ease-in-out hover:scale-110"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
