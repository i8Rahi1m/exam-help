'use client';

import { HomeLink } from "@/components/homeLink/ui";
import { StatisticLink } from "@/components/statisticLink/ui";
import CollapseSection from "@/entities/collapseSection/ui";
import { Designation } from "@/entities/designation/ui";
// import { useParams } from 'next/navigation';

export default function TicketStacks() {
  // const { id } = useParams();

  return (
    <div className="">
      <HomeLink/>
      <StatisticLink/>
      <Designation/>
      <CollapseSection/>
    </div>
  );
}
