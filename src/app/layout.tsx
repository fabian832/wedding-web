import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import { Work_Sans } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import CountingDate from "./Components/CountingDate";

const inter = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
})


const roboto = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <div className="flex justify-between">
          <div className="img-1 max-h-full"></div>
          <div className="img-2 max-h-full"></div>
          <div className="img-3">{children}</div>
        </div>
      </body>
    </html>
  );
}
