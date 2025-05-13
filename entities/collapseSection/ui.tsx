"use client";

import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { Tickets } from '@/database/tickets'; // adjust the path as needed

const CollapseSection: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: CSSProperties = {
    marginBottom: 14,
    fontSize: "20px",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  const parseQuestions = (ques: string) => {
    const parts = ques
      .split(/\n|\t/)
      .filter((q) => q.trim() !== "");

    return (
      <div className="space-y-1 text-[17px]">
        {parts.map((line, idx) => (
          <p key={idx}>
            <strong>{idx + 1}.</strong> {line.trim()}
          </p>
        ))}
      </div>
    );
  };

  const items: CollapseProps['items'] = Tickets[0].ticks.map((tick) => ({
    key: tick.id.toString(),
    label: `Билет ${tick.id}`,
    children: parseQuestions(tick.ques),
    style: { ...panelStyle, borderLeft: `4px solid ${Tickets[0].color}`, background: '#ffffffdc' },
  }));

  return (
    <section className="p-4">
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        // className='bg-[#ffffffdc]'
        items={items}
      />
    </section>
  );
};

export default CollapseSection;
