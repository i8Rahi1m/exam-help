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
  if (Tickets.some((el) => el.key === key)) {
    setData(Tickets.filter((el) => el.key === key));
  } else {
    setData(Math.filter((el) => el.key === key));
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
