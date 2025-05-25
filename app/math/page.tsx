'use client';

import { HomeLink } from "@/components/homeLink/ui";
import { Designation } from "@/entities/designation/ui";
import MathSection from "@/entities/mathSection/ui";

export default function TicketStacks() {

  return (
    <div className="">
      <HomeLink/>
      <Designation/>
      <MathSection/>
    </div>
  );
}
