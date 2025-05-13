'use client';

import Link from "next/link";
// import { useParams } from 'next/navigation';
import { AiFillHome } from "react-icons/ai";

export default function TicketPage() {
  // const { id } = useParams();

  return (
    <div className="">
      <Link href={"/"} className="transition-[0.3s] fixed top-3 left-2 p-1.5 text-[25px] rounded-2xl bg-[black] z-2 border-2 border-[gray] hover:bg-[#2c2c2c] after:shadow-2xl">
        <AiFillHome/>
      </Link>
    </div>
  );
}
