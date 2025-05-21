"use client";

import React from "react";
import { Tickets } from "@/database/tickets";
import Link from "next/link";

const TicketsStatistic: React.FC = () => {
  const oddTicks = Tickets[0].ticks.filter((tick) => tick.id % 2 !== 0);
  const evenTicks = Tickets[0].ticks.filter((tick) => tick.id % 2 === 0);

  return (
    <section className="p-4">
      <div className="flex gap-6 justify-between">
        <div className="flex flex-col gap-3">
          {oddTicks.map((el) => (
            <Link
              href={`/${Tickets[0].key}/${el.id}`}
              className="transition-[0.5s] p-3.5 pr-0 flex justify-between h-[65px] items-center bg-black rounded-xl border-[1px] border-[gray] border-l-[6px] border-l-[#B0C4DE] hover:bg-[#000000ab] hover:shadow-[0px_0px_10px_gray] hover:scale-[1.02]"
            >
              <span
                style={{ textShadow: "0 0 20px #dedede" }}
                className="text-white"
              >
                Билет <span className="ml-1">{el.id}</span>
              </span>

              <span className="p-[17px] px-3 bg-[#ffffff14] ml-3 rounded-xl text-[#8d8d8d]">
                {el.diff}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {evenTicks.map((el) => (
            <Link
              href={`/${Tickets[0].key}/${el.id}`}
              className="transition-[0.5s] p-3.5 pr-0 flex justify-between h-[65px] items-center bg-black rounded-xl border-[1px] border-[gray] border-l-[6px] border-l-[#4981ea] hover:bg-[#000000ab] hover:shadow-[0px_0px_10px_gray] hover:scale-[1.02]"
            >
              <span
                style={{ textShadow: "0 0 20px #dedede" }}
                className="text-white"
              >
                Билет <span className="ml-1">{el.id}</span>
              </span>

              <span className="p-[17px] px-3 bg-[#ffffff14] ml-3 rounded-xl text-[#8d8d8d]">
                {el.diff}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsStatistic;
