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

const data = [
  { age: '', Четные: 34, Нечетные: 58 },
];

export const Diagram = () => {
  return (
    <div className="md:w-[102%] w-[108.5%] h-[300px] -ml-[45px] mt-6">
      <ResponsiveContainer>
        <BarChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="5" />
          <XAxis type="number" />
          <YAxis dataKey="age" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Нечетные" fill="#B0C4DE" />
          <Bar dataKey="Четные" fill="#6495ED" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
