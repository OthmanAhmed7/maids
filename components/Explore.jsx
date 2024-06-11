import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <section className="w-full gradient-2 mt-[5rem] rounded-tr-[10rem] rounded-bl-[10rem]">
      <div className="max-w-[1200px] mx-auto py-[6rem] relative flex flex-col items-center">
        <Image
          src="/img/phone.png"
          width={400}
          height={400}
          alt="phone image"
          className="absolute top-[-9rem] left-0"
        />

        <h1 className="text-[2.5rem] font-[700] text-main-font mb-[1.8rem]">
          Explore Our App!
        </h1>

        <p className="max-w-[550px] text-slate-500 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          cumque ipsum explicabo praesentium distinctio tempore? Eaque aliquam
          in doloribus dolorum sapiente aperiam dolores sit, molestias
          accusantium iure velit harum officiis?
        </p>

        <div className="flex items-center gap-[1rem] mt-[1rem]">
          <button>
            <Image
              src="/img/app-store-full.svg"
              width={160}
              height={160}
              alt="app store image"
            />
          </button>

          <button>
            <Image
              src="/img/google-play-full.svg"
              width={160}
              height={160}
              alt="google play image"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
