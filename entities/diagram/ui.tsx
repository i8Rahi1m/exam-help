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
import { useEffect, useState } from 'react';

export const Diagram = () => {
  const params = useParams();
  const key = params?.title as string;
  const category = Tickets.find(ticket => ticket.key === key);

  const [even, setEven] = useState(0);
  const [odd, setOdd] = useState(0);

  useEffect(() => {
    let evenCount = 0;
    let oddCount = 0;

    if (category?.ticks) {
      category.ticks.forEach((tick: { diff: number }) => {
        if (tick.diff % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      });
    }

    sessionStorage.setItem('evenCount', evenCount.toString());
    sessionStorage.setItem('oddCount', oddCount.toString());
    setEven(evenCount);
    setOdd(oddCount);
  }, [category]);

  const data = [
    {
      name: '',
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
