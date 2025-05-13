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
        <div className="fixed p-[200px] w-[200px] bg-[#ffffff77] z-1 rounded-full shadow-[0px_0px_1500px] shadow-[#ffffff] -left-[350px] -top-[150px]"></div>
        <div className="fixed p-[200px] w-[200px] bg-[#ffffff75] z-1 rounded-full shadow-[0px_0px_1500px] shadow-[#ffffff] -right-[350px] -bottom-[150px]"></div>
        <p className="text-center text-[#bcbcbc]">Created by Ibrahim</p>
        {children}
      </body>
    </html>
  );
}
