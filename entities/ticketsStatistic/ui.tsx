"use client";

import React from "react";
import { Tickets } from "@/database/tickets";
import Link from "next/link";

const TicketsStatistic: React.FC = () => {
  const oddTicks = Tickets[0].ticks.filter((tick) => tick.id % 2 !== 0);
  const evenTicks = Tickets[0].ticks.filter((tick) => tick.id % 2 === 0);

  return (
    <section className="p-4 mt-[35px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          {oddTicks.map((el) => (
            <Link
              key={el.id}
              href={`/tickets/${Tickets[0].key}/${el.id}`}
              className="transition-[0.5s] p-3.5 w-[43vw] pr-0 flex justify-between h-[65px] items-center bg-[#121212] rounded-xl border-[1px] border-[gray] border-l-[6px] border-l-[#B0C4DE] hover:bg-[#000000ab] hover:shadow-[0px_0px_10px_gray] hover:scale-[1.02] active:bg-[#111111be] active:scale-[1.07] active:shadow-[0px_0px_11px_gray] inset-shadow-[0px_0px_15px] inset-shadow-[#000]"
            >
              <span
                style={{ textShadow: "0 0 20px #dedede" }}
                className="text-white text-[22px]"
              >
                Билет <span className="ml-1">{el.id}</span>
              </span>

              <span className="p-[18px] px-3 text-[22.5px] bg-[#ffffff14] ml-3 rounded-xl text-[#9f9f9f]">
                {el.diff}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {evenTicks.map((el) => (
            <Link
              key={el.id}
              href={`/tickets/${Tickets[0].key}/${el.id}`}
              className="transition-[0.5s] p-3.5 pr-0 w-[43vw] flex justify-between h-[65px] items-center bg-[#121212] rounded-xl border-[1px] border-[gray] border-l-[6px] border-l-[#4981ea] hover:bg-[#000000ab] hover:shadow-[0px_0px_10px_gray] hover:scale-[1.02] active:bg-[#111111be] active:scale-[1.07] active:shadow-[0px_0px_11px_gray] inset-shadow-[0px_0px_15px] inset-shadow-[#000]"
            >
              <span
                style={{ textShadow: "0 0 20px #dedede" }}
                className="text-white text-[22.5px]"
              >
                Билет <span className="ml-1">{el.id}</span>
              </span>

              <span className="p-[18px] px-3 text-[22px] bg-[#ffffff14] ml-3 rounded-xl text-[#9f9f9f]">
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
