'use client';

import { useParams } from 'next/navigation';
import { Tickets } from '@/database/tickets';
import { HomeLink } from '@/components/homeLink/ui';
import { JSX } from 'react';

export default function TicketAnswerPage() {
  const params = useParams();
  const key = params?.title as string;
  const id = parseInt(params?.id as string);

  const category = Tickets.find(ticket => ticket.key === key);
  const ticket = category?.ticks.find(t => t.id === id);

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
          if (part === "\\d") {
            return <div key={index} data-type="dot" />;
          }
          if (part === "\\c") {
            return <div key={index} data-type="count" />;
          }
          if (part === "\\n") {
            return <br key={index} />;
          }
  
          const prev = parts[index - 1];
  
          if (prev === "\\d") {
            return (
              <p
                key={index}
                className="pl-4 before:content-['•'] before:mr-2 before:text-lg before:inline-block"
              >
                {part.trim()}
              </p>
            );
          }
  
          if (prev === "\\c") {
            return (
              <p key={index} className="pl-4">
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
    <div className="p-6 px-4 max-w-4xl mx-auto space-y-6">
      <HomeLink />
      <h1 className="text-2xl font-bold flex items-center">
        <span className='bg-black w-fit p-2 rounded-2xl border-[1px] text-[27px] mr-1.5' style={{ borderColor: category.color }}>{category.title.toUpperCase()}</span> - Билет {ticket.id}
      </h1>
      <div className="space-y-[40px] pt-3">
        <div className='bg-[#3c3c3c99] p-4 rounded-3xl w-fit'>
          <h2 className="text-lg font-semibold">Вопросы:</h2>
          <pre className="whitespace-pre-wrap -mt-4">{ticket.ques}</pre>
        </div>

        {ticket.answers?.map((answer) => (
          <div key={answer.num}>
            <h2 className="text-lg font-semibold bg-[#323232d9] border-[1px] border-[#808080a0] border-b-0 rounded-t-2xl p-2 px-4 text-[23px]">Ответ {answer.num}:</h2>
            <div className='bg-black p-4 rounded-b-2xl border-[1px] border-[#808080a0] border-t-0 text-[18px]'>{formatTextWithMarkers(answer.ans)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
