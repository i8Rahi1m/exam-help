'use client';

import { useParams } from 'next/navigation';
import { Tickets } from '@/database/tickets'; // adjust path as needed
import { useEffect, useState } from 'react';

export default function TicketPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState<typeof Tickets[0] | null>(null);

  useEffect(() => {
    const found = Tickets.find((t) => t.key.toString() === id);
    setTicket(found || null);
  }, [id]);

  if (!ticket) return <div className="p-4 text-red-500">Ticket not found.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-600">{ticket.title}</h1>
      <div className="space-y-4">
        {ticket.ticks.map((tick, index) => {
          const lines = tick.ques.trim().split('\n');
          return (
            <div key={tick.id} className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-blue-600">Вопрос {index + 1}</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {lines.map((line, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-200">{line}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
