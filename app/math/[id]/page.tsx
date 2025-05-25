"use client";

import { useParams } from "next/navigation";
import { Math as mathData } from "@/database/math";
import { HomeLink } from "@/components/homeLink/ui";
import { useState } from "react";

export default function MathTaskPage() {
  const params = useParams();
  const id = parseInt(params?.id as string);

  const category = mathData[0];
  const theme = category.themes.find((t) => t.id === id);

  const [videoStart, setVideoStart] = useState<number | null>(null);

  if (!theme) {
    return (
      <div className="p-6 text-center text-red-500">
        <HomeLink />
        <p>Задача не найдена.</p>
      </div>
    );
  }

  const videoUrl = `https://www.youtube.com/embed/${theme.video}${videoStart !== null ? `?start=${videoStart}&autoplay=1` : ""}`;

  return (
    <div className="p-6 px-4 max-w-4xl mx-auto space-y-6">
      <HomeLink />
      <h1 className="text-2xl font-bold flex items-center">
        <span
          className="bg-black w-fit p-2 rounded-2xl border-[1px] text-[19px] mr-2"
          style={{ borderColor: category.color }}
        >
          {category.title.toUpperCase()}
        </span>
        -
        <span className="ml-2.5">{theme.theme}</span>
      </h1>

      <div className="bg-[#3c3c3c99] p-4 rounded-3xl border-[1px] border-[#8080806a]">
        <h2 className="text-lg font-semibold">Задачи:</h2>
        {theme.tasks.map((el) => (
          <div key={el.id} className="flex items-center justify-between py-1">
            <p className="text-[23px] px-1.5 rounded-lg bg-[#444] text-white">{el.task}</p>
            {el.time !== undefined && (
              <button
                onClick={() => setVideoStart(el.time)}
                className="pl-3 pr-2.5 py-1 rounded-lg bg-[#444] text-white hover:bg-[#666] ml-4 transition"
              >
                ▶
              </button>
            )}
          </div>
        ))}
      </div>

      {theme.video && (
        <div>
          <h2 className="text-lg font-medium bg-[#323232d9] border-[1px] border-[#8080806a] border-b-0 rounded-t-2xl p-1.5 px-4 text-[23px]">
            Видео
          </h2>
          <div className="bg-black rounded-b-2xl border-[1px] border-[#808080a0] border-t-0 aspect-video">
            <iframe
              key={videoUrl} // force iframe to reload when videoUrl changes
              className="w-full h-full rounded-b-2xl"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
