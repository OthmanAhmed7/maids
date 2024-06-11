import Image from "next/image";
import React from "react";

const Last = () => {
  return (
    <section className="w-full gradient py-[5rem] rounded-tl-[10rem] rounded-br-[10rem]">
      <div className="flex flex-col px-[2rem] xl:px-0 lg:flex-row items-center justify-between max-w-[1200px] mx-auto">
        <Image src="/img/library.svg" width={400} height={400} alt="library" />

        <div className="flex flex-col items-center">
          <h1 className="text-[2rem] max-w-[400px] font-[700] text-main-font text-center">
            Cleaning Made Fun and Easy with Maids
          </h1>

          <p className="text-center max-w-[500px] text-slate-500 mt-[1rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, aut
            veritatis? Obcaecati deleniti consequuntur non aliquam doloribus
            sint temporibus ut veritatis maxime delectus numquam, laudantium in
            placeat laboriosam! Eaque, neque.
          </p>

          <div className="flex items-center gap-[1rem] mt-[1.5rem]">
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

        <Image src="/img/chair.svg" width={400} height={400} alt="chair" />
      </div>
    </section>
  );
};

export default Last;
