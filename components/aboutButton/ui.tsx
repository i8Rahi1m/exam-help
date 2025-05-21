"use client"

import React from 'react';
import { Button, Popover } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { FaInfo } from "react-icons/fa";

const content = (
  <div>
    <p className='w-[350px] text-[15px] font-medium'>На этой странице билеты поделены на ЧЁТНЫЕ и НЕЧЁТНЫЕ и суммированы сложности их вопросов, чтобы определить легчайшие из них.</p>
  </div>
);

const AboutButton: React.FC = () => (
  <Popover content={content} title="About*">
    <Button className="custom-buton" type="primary"><FaInfo/></Button>
  </Popover>
);

export default AboutButton;