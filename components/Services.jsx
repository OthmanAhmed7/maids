import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="service">
      <div className="max-w-[1200px] mx-auto py-[5rem] flex flex-col items-center">
        <h1 className="text-[2rem] font-[650] text-main-font">
          Our <span className="highlight">Services</span>
        </h1>

        <div className="flex items-center justify-between gap-[3rem] mt-[4rem]">
          <div className="flex flex-col items-center max-w-[265px]">
            <Image src="/img/dishes.svg" width={80} height={80} alt="dishes" />

            <h1 className="mt-[1rem] text-[1.5rem] font-[600] text-main-font">
              Dishes
            </h1>

            <p className="text-center text-slate-500 mt-[.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia ad voluptate. Officiis unde repellendus odio
              perspiciatis. Cumque suscipit aut, aspernatur dolore earum est
              deleniti non quo consequuntur assumenda
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[265px]">
            <Image src="/img/vacuum.svg" width={80} height={80} alt="vacuum" />

            <h1 className="mt-[1rem] text-[1.5rem] font-[600] text-main-font">
              Vacuuming
            </h1>

            <p className="text-center text-slate-500 mt-[.5rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium officia ad voluptate. Officiis unde repellendus odio
              perspiciatis. Cumque suscipit aut, aspernatur dolore earum est
              deleniti non quo consequuntur assumenda itaque.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[265px]">
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
              deleniti non quo consequuntur assumenda
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[265px]">
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
              deleniti non quo consequuntur assumenda itaque.
            </p>
          </div>
        </div>

        {/* <div>
          <p>
            Looking for the best home cleaning services near you? Look no
            further than Molly Maid's custom home cleaning services. We
            understand the challenges of maintaining a clean home amid a busy
            schedule. Our team is dedicated to providing top-notch home cleaning
            services tailored to your specific needs and preferences.
          </p>

          <p>
            At Molly Maid, we offer unmatched flexibility in our cleaning
            services. Our team collaborates closely with you to develop a
            tailored cleaning plan that suits your lifestyle and budget. Whether
            you require regular cleaning, assistance with move-in cleaning, or a
            one-time specific cleaning, we've got you covered.
          </p>

          <p>
            Don't settle for a one-size-fits-all approach to home cleaning.
            Trust Molly Maid for the best home cleaning services that exceed
            your expectations. Contact us today to schedule a consultation and
            experience the convenience and flexibility of our custom cleaning
            services.
          </p>

          <p>Some of our custom home cleaning services include:</p>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
