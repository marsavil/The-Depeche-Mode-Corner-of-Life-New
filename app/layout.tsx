import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import { dark } from '@clerk/themes';
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Depeche Mode Corner of Life",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <Topbar />
        <section className="main-container">
          <div className="w-full ma-w-4xl">
            {children}
          </div>
        </section>
        <Bottombar />
      </body>
    </html>
  </ClerkProvider>
  );
}
