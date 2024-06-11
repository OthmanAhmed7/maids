import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-[3rem] px-[2rem] xl:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[.5rem] md:flex-row items-center justify-between">
        <button className="text-main-font">Privacy Policy</button>

        <p className="flex items-center gap-1 text-slate-500">
          Maids <FaRegCopyright /> All Rights Reserved
        </p>

        <button>
          <Link href="#home" className="flex items-center gap-2 text-main-font">
            Back to top <FaArrowUp />
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
