import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header id="home">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-[1.5rem]">
        <div>
          <h1 className="uppercase text-[2rem] font-[700] tracking-[.1rem] text-main-font">
            maids
          </h1>
        </div>

        <nav>
          <ul className="flex items-center gap-[1.5rem] text-[1.15rem] font-[600] text-main-font">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#service">Services</Link>
            </li>
            <li>
              <Link href="#faq">FAQs</Link>
            </li>
            <li>
              <Link href="#testimonial">Testimonials</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-[1rem]">
          <button>
            <Image
              src="/img/app-store.png"
              width={45}
              height={45}
              alt="app store image"
            />
          </button>

          <button>
            <Image
              src="/img/google-play.png"
              width={45}
              height={45}
              alt="google play image"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
