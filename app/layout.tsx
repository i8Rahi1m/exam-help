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
        <div className="fixed p-[200px] w-[200px] bg-[#ffffff] z-1 rounded-full shadow-[20px_20px_1500px] -left-[400px] -top-[150px]"></div>
        <div className="fixed p-[200px] w-[200px] bg-[#ffffff] z-1 rounded-full shadow-[-20px_-20px_1500px] -right-[400px] -bottom-[200px]"></div>
        <p className="text-center text-[#bcbcbc]">Created by Ibrahim</p>
        {children}
      </body>
    </html>
  );
}
