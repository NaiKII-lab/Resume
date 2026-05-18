import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // โหลดไฟล์ CSS หลัก

// 1. ประกาศเรียกใช้ฟอนต์ Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio of Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. ใส่ scroll-smooth ตรงนี้
    <html lang="en" className="scroll-smooth">
      {/* 3. ใช้ตัวแปร inter ที่ประกาศไว้ด้านบน */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}