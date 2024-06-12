"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between pb-[3rem] pt-[2rem] flex-col md:flex-row px-[2rem] xl:px-0">
        <div>
          <h1
            data-aos="fade-down"
            data-aos-duration="1300"
            className="text-[3.4rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[4rem] max-w-[650px] font-[800] text-main-font lg:leading-[4.5rem] mb-[1.5rem]"
          >
            Clean Your Home the <span className="highlight">Right Way</span>.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            data-aos-delay="200"
            className="text-slate-500 max-w-[600px] mb-[1rem]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            aperiam fuga laborum odio quo itaque, ratione nemo possimus,
            expedita minima iusto nihil vitae aliquam blanditiis illo modi iste
            eos alias?
          </p>

          <div className="flex items-center gap-[1rem]">
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

        <div className="relative mt-[4rem] md:mt-0">
          <Image
            src="/img/hand.png"
            width={900}
            height={900}
            alt="hand image"
            className="rotate-[30deg] relative z-[10]"
          />

          <Image
            data-aos="zoom-in"
            data-aos-duration="1300"
            src="/img/bubble.png"
            width={700}
            height={700}
            alt="bubbles image"
            className="absolute top-[-60px] right-0 z-[0]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
