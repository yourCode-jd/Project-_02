import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Header from "@/components/layouts/Header";
import TopBar from "@/components/layouts/TopBar";
// import Head from "next/head";
import "./globals.css";

const font = Quicksand({
  subsets: ['latin'],
  // variable: '--Quicksand'
})

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
      {/* <Head>

      </Head> */}
      <body className={font.className}>
        <TopBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
