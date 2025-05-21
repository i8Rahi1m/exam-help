import { Tickets } from "@/database/tickets";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap p-4 justify-between md:justify-normal md:space-x-5.5 space-y-5.5 md:px-[135px]">
      {Tickets.map((el) => (
        <Link
          href={`/${el.key}`}
          key={el.key}
          className="transition-[0.7s] flex justify-center items-center bg-[black] w-full h-[40vw] rounded-2xl text-[25px] md:w-[200px] md:h-[200px] hover:bg-[#1d1d1d] hover:text-[24px] hover:scale-105"
          style={{ border: `2px solid ${el.color}` }}
        >
          {el.title}
        </Link>
      ))}
    </div>
  );
}
