'use client';

import Link from "next/link";
import { IoStatsChart } from "react-icons/io5";

export const StatisticLink = () => {
  return (
    <div>
      <Link href={"/statistic"} className="transition-[0.3s] fixed top-[11px] left-[73px] p-2 text-[22px] rounded-full bg-[black] z-2 border-[1px] border-[#ffffffc8] hover:bg-[#434343] hover:shadow-[0px_0px_8px_white] after:shadow-2xl">
        <IoStatsChart/>
      </Link>
    </div>
  );
}
