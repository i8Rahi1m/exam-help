"use client";

import { Tickets } from "@/database/tickets";
import { Math } from "@/database/math";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Designation = () => {
  const params = useParams();
  const key = params?.title as string;

  const [data, setData] = useState<{ key: string; color: string; title: string }[]>([]);

  useEffect(() => {
    const ticketMatch = Tickets.find((el) => el.key === key);
    if (ticketMatch) {
      setData(Tickets);
    } else {
      setData(Math);
    }
  }, [key]);

  return (
    <section>
      {data.map((el) => (
        <div key={el.key} className="flex px-4 pt-[40px]">
          <span className="p-3 mr-1 rounded-2xl" style={{ backgroundColor: el.color }}></span>
          <p>{el.title}</p>
        </div>
      ))}
    </section>
  );
};
