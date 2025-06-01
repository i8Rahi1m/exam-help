"use client";

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

export const HomeLink = () => {
  return (
    <div>
      <Link
        href={"/"}
        className="transition-[0.3s] fixed top-2 left-3.5 p-2 text-[25px] rounded-full bg-[black] z-10 border-[1px] border-[#ffffffc8] hover:bg-[#434343] hover:shadow-[0px_0px_8px_white] after:shadow-2xl active:bg-[#696969] active:scale-110"
      >
        <AiFillHome />
      </Link>
    </div>
  );
};
