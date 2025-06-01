import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exam Helper",
  description: "Classmates can share with answers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="fixed p-[300px] w-[200px] bg-[#ffffff73] z-1 rounded-full shadow-[0px_0px_2000px] shadow-[#ffffff] -left-[580px] -top-[260px]"></div>
        <div className="fixed p-[300px] w-[200px] bg-[#ffffff73] z-1 rounded-full shadow-[0px_0px_2000px] shadow-[#ffffff] -right-[580px] -bottom-[260px]"></div>
        <p className="text-center text-[#bcbcbc] mt-[1px]">Created by Ibrahim X.</p>
        {children}
      </body>
    </html>
  );
}
