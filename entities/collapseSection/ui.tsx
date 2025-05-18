'use client';

import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { Tickets } from '@/database/tickets';
import { useRouter } from 'next/navigation';
import { LuPanelLeftOpen } from "react-icons/lu";

const CollapseSection: React.FC = () => {
  const router = useRouter();
  const { token } = theme.useToken();

  const panelStyle: CSSProperties = {
    marginBottom: 14,
    fontSize: '20px',
    background: token.colorFillAlter,
    borderRadius: '14px',
    border: 'none'
  };

  const parseQuestions = (ques: string) => {
    const parts = ques
      .split(/\n/)
      .filter((q) => q.trim() !== '');

    return (
      <div className="space-y-1 text-[17px] text-[white]">
        {parts.map((line, idx) => (
          <p key={idx}>
            <strong>{idx + 1}.</strong> {line.trim()}
          </p>
        ))}
      </div>
    );
  };

  const handleNavigation = (id: number, title: string) => {
    router.push(`/${title}/${id}`);
  };

  const items: CollapseProps['items'] = Tickets[0].ticks.map((tick) => ({
    key: tick.id.toString(),
    label: (
      <div className="flex justify-between items-center text-white">
        <span className="-ml-4.5">Билет {tick.id}</span>
        <button
          onClick={() => handleNavigation(tick.id, Tickets[0].key)}
          className="transition-[0.3s] p-1.5 text-[22px] rounded-2xl hover:bg-[#80808056] cursor-pointer hover:scale-[1.2]"
        >
          <LuPanelLeftOpen />
        </button>
      </div>
    ),
    children: (
      <div>
        {parseQuestions(tick.ques)}
      </div>
    ),
    style: {
      ...panelStyle,
      border: "1px solid gray",
      borderLeft: `5px solid ${Tickets[0].color}`,
      background: 'black',
    },
  }));
  

  return (
    <section className="p-4">
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        items={items}
      />
    </section>
  );
};

export default CollapseSection;
