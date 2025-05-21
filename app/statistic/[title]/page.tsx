'use client';

import AboutButton from "@/components/aboutButton/ui";
import { HomeLink } from "@/components/homeLink/ui";
import { Diagram } from "@/entities/diagram/ui";
import TicketsStatistic from "@/entities/ticketsStatistic/ui";

export default function TicketPage() {

  return (
    <div className="">
      <AboutButton/>
      <HomeLink/>
      <Diagram/>
      <TicketsStatistic/>
    </div>
  );
}
