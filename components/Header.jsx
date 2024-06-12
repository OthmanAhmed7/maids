"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handelClick = () => {
    setToggle(!toggle);
    setOverlay(!overlay);
  };

  return (
    <header id="home">
      {overlay && (
        <div
          onClick={handelClick}
          className="w-full h-[100vh] bg-black opacity-[20%] fixed z-[20] top-0 right-0"
        ></div>
      )}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-[1.5rem] px-[2rem] xl:px-0">
        <div>
          <h1 className="uppercase text-[2rem] font-[700] tracking-[.1rem] text-main-font">
            <Link href="/home">maids</Link>
          </h1>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-[1.5rem] text-[1.15rem] font-[600] text-main-font">
            <li>
              <Link href="#home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#service" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#testimonial" className="hover:underline">
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            className="text-[1.5rem] relative z-[100]"
            onClick={handelClick}
          >
            {toggle ? <IoClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {toggle && (
        <div className="fixed right-0 top-0 pt-[6rem] pr-[5rem] pl-[1rem] shadow-xl bg-gradient h-[100vh] w-[50%] z-[80]">
          <nav>
            <ul className=" text-[1.5rem] font-[600] text-main-font">
              <li className="mb-[1rem]">
                <Link href="#home">Home</Link>
              </li>
              <li className="mb-[1rem]">
                <Link href="#service">Services</Link>
              </li>
              <li className="mb-[1rem]">
                <Link href="#faq">FAQs</Link>
              </li>
              <li>
                <Link href="#testimonial">Testimonials</Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-[1rem] mt-[1.5rem]">
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
      )}
    </header>
  );
};

export default Header;
