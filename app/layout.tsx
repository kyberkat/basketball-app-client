import type { Metadata } from "next";
import localFont from "next/font/local";
import {Work_Sans} from 'next/font/google'
import "./globals.css";

import HeaderContainer from "@/ui/header"; 
import { SessionProvider } from "@/context/SessionContext";
import NavBar from "@/ui/navbar";
import ContentBar from "@/ui/contentBar";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "500"
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
  title: "Basketball Stats App",
  description: "made by KyberKat @ github.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased xl:mx-[200px] lg:mx-[100px]`}
      >
        <SessionProvider>
          <HeaderContainer/>
          <NavBar/>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
