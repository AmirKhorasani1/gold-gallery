import type { Metadata } from "next";
import localFont from 'next/font/local';
import './globals.css';

const yekanBakh = localFont({
  src: [
    {
      path: './fonts/YekanBakh-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/YekanBakh-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/YekanBakh-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-yekan-bakh',
});

export const metadata: Metadata = {
  title: "گالری طلای امیری - خرید آنلاین طلا",
  description: "Gold Gallery project with next.js v16",
  icons: {
    icon: "/images/icon.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanBakh.variable}`}>
      <body>{children}</body>
    </html>
  );
}
