'use client';

import { HomeLink } from "@/components/homeLink/ui";
import { IoStatsChart } from "react-icons/io5";
import CollapseSection from "@/entities/collapseSection/ui";
import { Designation } from "@/entities/designation/ui";
import { useParams } from 'next/navigation';
import Link from "next/link";

export default function TicketStacks() {
  const params = useParams();
  const key = params?.title as string;

  return (
    <div className="">
      <Link href={`/statistic/${key}`} className="transition-[0.3s] fixed top-[10px] left-[70px] p-2 text-[22px] rounded-full bg-[black] z-2 border-[1px] border-[#ffffffc8] hover:bg-[#434343] hover:shadow-[0px_0px_8px_white] after:shadow-2xl active:bg-[#696969] active:scale-110">
        <IoStatsChart/>
      </Link>
      <HomeLink/>
      <Designation/>
      <CollapseSection/>
    </div>
  );
}
