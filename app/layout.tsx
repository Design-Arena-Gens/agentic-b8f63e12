import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Operation Scooter | Critterburg Chronicles",
  description:
    "Relive the hilarious pursuit of a scooter-riding squirrel as Officer Snowball, Ricky Rat, and Gogo learn that teamwork is messy, loud, and worth it."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
