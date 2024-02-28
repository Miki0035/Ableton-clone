import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/containers";
import { MinNavbar } from "@/components";

export const metadata: Metadata = {
  title: "Ableton Demo",
  description: "Nextjs copy of the Ableton Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MinNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
