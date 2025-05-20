"use client";

import { useParams } from "next/navigation";
import { Tickets } from "@/database/tickets";
import { HomeLink } from "@/components/homeLink/ui";
import { JSX, useEffect, useState } from "react";

export default function TicketAnswerPage() {
  const params = useParams();
  const key = params?.title as string;
  const id = parseInt(params?.id as string);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const category = Tickets.find((ticket) => ticket.key === key);
  const ticket = category?.ticks.find((t) => t.id === id);


  function formatTextWithMarkers(text: string): JSX.Element {
    const parts = text.split(/(\\[dcn])/g);
    let counter = 1;

    return (
      <div className="space-y-2">
        {parts.map((part, index) => {
          if (part === "\\d") return <div key={index} data-type="dot" />;
          if (part === "\\c") return <div key={index} data-type="count" />;
          if (part === "\\n") return <br key={index} />;

          const prev = parts[index - 1];

          if (prev === "\\d") {
            return (
              <p
                key={index}
                className="pl-2.5 before:content-['•'] before:mr-2 before:text-lg before:inline-block"
              >
                {part.trim()}
              </p>
            );
          }

          if (prev === "\\c") {
            return (
              <p key={index} className="pl-2.5">
                <span className="font-semibold mr-2">{counter++}.</span>
                {part.trim()}
              </p>
            );
          }

          return <p key={index}>{part.trim()}</p>;
        })}
      </div>
    );
  }
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      if (voices.length) {
        setVoicesLoaded(true);
      } else {
        // try again when voices list updates
        speechSynthesis.onvoiceschanged = () => {
          setVoicesLoaded(true);
        };
      }
    };

    loadVoices();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const utterance = new SpeechSynthesisUtterance("Hello world");
      speechSynthesis.speak(utterance);
    }
  }, []);
  
  
  if (!category || !ticket) {
    return (
      <div className="p-6 text-center text-red-500">
        <HomeLink />
        <p>Билет не найден.</p>
      </div>
    );
  }

  function readAloud(text: string) {
    if (typeof window !== "undefined") {
      speechSynthesis.cancel();

      const voices = speechSynthesis.getVoices();
      let selectedVoice = voices.find(
        (v) => v.lang === "ru-RU" && /Google|Yandex|Microsoft/i.test(v.name)
      );

      // fallback to any Russian voice if no premium ones found
      if (!selectedVoice) {
        selectedVoice = voices.find((v) => v.lang === "ru-RU");
      }

      const utterance = new SpeechSynthesisUtterance(
        text.replace(/\\[dcn]/g, "")
      );
      utterance.lang = "ru-RU";
      if (selectedVoice) utterance.voice = selectedVoice;
      utterance.rate = 1.4; // adjust speaking speed (0.1 - 10)
      utterance.pitch = 1; // adjust tone (0 - 2)

      speechSynthesis.speak(utterance);
    }
  }

  function stopReading() {
    if (typeof window !== "undefined") {
      speechSynthesis.cancel();
    }
  }

  return (
    <div className="p-6 px-4 max-w-4xl mx-auto space-y-6">
      <HomeLink />
      <h1 className="text-2xl font-bold flex items-center">
        <span
          className="bg-black w-fit p-2 rounded-2xl border-[1px] text-[19px] mr-1.5"
          style={{ borderColor: category.color }}
        >
          {category.title.toUpperCase()}
        </span>
        - Билет {ticket.id}
      </h1>

      <div className="space-y-[40px] pt-3">
        <div className="bg-[#3c3c3c99] p-4 rounded-3xl border-[1px] border-[#8080806a]">
          <h2 className="text-lg font-semibold">Вопросы:</h2>
          <pre className="whitespace-pre-wrap -ml-2">
            {formatTextWithMarkers(ticket.ques)}
          </pre>
        </div>

        {ticket.answers?.map((answer) => (
          <div key={answer.num}>
            <div className="flex items-center justify-between bg-[#323232d9] border-[1px] border-[#8080806a] border-b-0 rounded-t-2xl p-1.5 px-4">
              <h2 className="text-[23px] font-medium">Ответ {answer.num}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => readAloud(answer.ans)}
                  className="text-sm px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white"
                >
                  🔊 Читать
                </button>
                <button
                  onClick={stopReading}
                  className="text-sm px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-white"
                >
                  ⛔ Стоп
                </button>
              </div>
            </div>
            <div className="bg-black p-4 rounded-b-2xl border-[1px] border-[#808080a0] border-t-0 text-[18px]">
              {formatTextWithMarkers(answer.ans)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
