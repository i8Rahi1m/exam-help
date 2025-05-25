'use client';

import { HomeLink } from "@/components/homeLink/ui";
import { IoStatsChart } from "react-icons/io5";
import CollapseSection from "@/entities/collapseSection/ui";
import { Designation } from "@/entities/designation/ui";
import { useParams } from 'next/navigation';
import Link from "next/link";
import MathSection from "@/entities/mathSection/ui";

export default function TicketStacks() {
  const params = useParams();
  const key = params?.title as string;

  return (
    <div className="">
      <HomeLink/>
      <Designation/>
      <MathSection/>
    </div>
  );
}
