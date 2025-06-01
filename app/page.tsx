import { Math } from "@/database/math";
import { Tickets } from "@/database/tickets";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap p-4 justify-between sm:justify-normal sm:space-x-5.5 space-y-5.5 md:px-[135px]">
      {Tickets.map((el) => (
        <Link
          href={`tickets/${el.key}`}
          key={el.key}
          className="transition-[0.7s] flex justify-center items-center bg-[#1a1a1a] w-full h-[40vw] rounded-2xl text-[25px] sm:w-[200px] sm:h-[200px] hover:bg-[#1d1d1d] hover:text-[24px] hover:scale-105 active:bg-[#434343c5] active:scale-110 inset-shadow-[0px_0px_15px] inset-shadow-[#000]"
          style={{ border: `2px solid ${el.color}` }}
        >
          {el.title}
        </Link>
      ))}
      {Math.map((el) => (
        <Link
          href={`/${el.key}`}
          key={el.key}
          className="transition-[0.7s] flex justify-center items-center bg-[#1a1a1a] w-full h-[40vw] rounded-2xl text-[25px] sm:w-[200px] sm:h-[200px] hover:bg-[#1d1d1d] hover:text-[24px] hover:scale-105 active:bg-[#434343c5] active:scale-110 inset-shadow-[0px_0px_15px] inset-shadow-[#000]"
          style={{ border: `2px solid ${el.color}` }}
        >
          {el.title}
        </Link>
      ))}
    </div>
  );
}
