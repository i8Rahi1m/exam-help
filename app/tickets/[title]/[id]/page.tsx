'use client';

import { useParams, useRouter } from 'next/navigation';
import { Tickets } from '@/database/tickets';
import { HomeLink } from '@/components/homeLink/ui';
import { JSX } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // или любой другой иконкой, можно текстом

export default function TicketAnswerPage() {
  const router = useRouter();
  const params = useParams();
  const key = params?.title as string;
  const id = parseInt(params?.id as string);

  const category = Tickets.find(ticket => ticket.key === key);
  const ticket = category?.ticks.find(t => t.id === id);

  const nextTicket = category?.ticks.find(t => t.id === id + 1);
  const prevTicket = category?.ticks.find(t => t.id === id - 1);

  if (!category || !ticket) {
    return (
      <div className="p-6 text-center text-red-500">
        <HomeLink />
        <p>Билет не найден.</p>
      </div>
    );
  }

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

  return (
    <div className="p-6 px-4 max-w-4xl mx-auto space-y-6 relative">
      <HomeLink />
      
      {/* Back Button */}
      {prevTicket && (
        <button
          onClick={() => router.push(`/tickets/${key}/${id - 1}`)}
          className="transition-[0.4s] fixed top-[41vh] left-0 h-[100px] px-2 rounded-r-full bg-[black] z-20 border-[1px] border-[#ffffffc8] hover:bg-[#434343] hover:shadow-[0px_0px_8px_white] after:shadow-2xl"
        >
          <ArrowLeft className='scale-125'/>
        </button>
      )}

      {/* Forward Button */}
      {nextTicket && (
        <button
          onClick={() => router.push(`/tickets/${key}/${id + 1}`)}
          className="transition-[0.4s] fixed top-[41vh] right-0 text-[25px] h-[100px] px-2 rounded-l-full bg-[black] z-20 border-[1px] border-[#ffffffc8] hover:bg-[#434343] hover:shadow-[0px_0px_8px_white] after:shadow-2xl"
        >
          <ArrowRight className='scale-125'/>
        </button>
      )}

      <h1 className="text-2xl font-bold flex items-center">
        <span
          className="bg-black w-fit p-2 rounded-2xl border-[1px] text-[19px] mr-1.5"
          style={{ borderColor: category.color }}
        >
          {category.title.toUpperCase()}
        </span>{" "}
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
            <h2 className="text-lg font-medium bg-[#323232d9] border-[1px] border-[#8080806a] border-b-0 rounded-t-2xl p-1.5 px-4 text-[23px]">
              Ответ {answer.num}
            </h2>
            <div className="bg-black p-4 rounded-b-2xl border-[1px] border-[#808080a0] border-t-0 text-[18px]">
              {formatTextWithMarkers(answer.ans)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
