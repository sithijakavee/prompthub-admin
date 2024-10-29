import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PROMPT HUB - Admin",
  description: "PROMPTHUB is a place to buy and sell AI images prompts",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${monserrat.variable}`}>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
