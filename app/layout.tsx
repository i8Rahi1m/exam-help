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
        {children}
      </body>
    </html>
  );
}
