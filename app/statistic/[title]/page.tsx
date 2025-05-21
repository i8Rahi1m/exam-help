'use client';

import AboutButton from "@/components/aboutButton/ui";
import { HomeLink } from "@/components/homeLink/ui";
import { Diagram } from "@/entities/diagram/ui";

export default function TicketPage() {

  return (
    <div className="">
      <AboutButton/>
      <HomeLink/>
      <Diagram/>
      
    </div>
  );
}
