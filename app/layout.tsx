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
        <div className="fixed p-[150px] w-[200px] bg-[#ffffffdf] z-1 rounded-full shadow-[0px_0px_1000px] -left-[320px] -top-[150px]"></div>
        <div className="fixed p-[150px] w-[200px] bg-[#ffffffdf] z-1 rounded-full shadow-[0px_0px_1000px] -right-[310px] -bottom-[200px]"></div>
        <p className="text-center text-[#bcbcbc]">Created by Ibrahim</p>
        {children}
      </body>
    </html>
  );
}
