"use client";

import React from "react";
import { Math as mathData } from "@/database/math";
import Link from "next/link";

const MathSection: React.FC = () => {
  const selectedSection = mathData[0]; // или найти нужную секцию по ключу

  return (
    <section className="p-4 flex flex-col items-center">
      {selectedSection.themes.map((el) => (
        <Link
          key={el.id}
          href={`/math/${el.id}`}
          className="transition duration-200 p-3.5 md:w-[43vw] mb-3 w-full pr-0 flex justify-between h-[65px] items-center bg-black rounded-xl border border-gray-500 border-l-[6px] border-l-[red] hover:bg-[#000000ab] hover:shadow-[0_0_10px_gray] hover:scale-[1.02]"
        >
          <span
            style={{ textShadow: "0 0 20px #dedede" }}
            className="text-white text-[23.5px]"
          >
            {el.theme}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default MathSection;
