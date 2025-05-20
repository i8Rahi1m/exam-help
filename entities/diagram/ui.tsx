'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useParams } from 'next/navigation';
import { Tickets } from '@/database/tickets';

export const Diagram = () => {
  const params = useParams();
  const key = params?.title as string;
  const category = Tickets.find(ticket => ticket.key === key);

  let even = 0;
  let odd = 0;

  if (category?.ticks) {
    category.ticks.forEach((tick: { diff: number }) => {
      if (tick.diff % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    });
  }

  const total = category?.ticks?.length || 87;

  const data = [
    {
      name: 'Сложность',
      Четные: even,
      Нечетные: odd,
    },
  ];

  return (
    <div className="md:w-[102%] w-[108.5%] h-[300px] -ml-[45px] mt-8">
      <ResponsiveContainer>
        <BarChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Нечетные" fill="#B0C4DE" />
          <Bar dataKey="Четные" fill="#6495ED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
