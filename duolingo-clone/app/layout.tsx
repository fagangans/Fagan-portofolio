import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "DuoLearn",
  description: "Learn languages with DuoLearn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-[#E5E5E5]`}>
        <div style={{
          maxWidth: 390,
          margin: "0 auto",
          minHeight: "100vh",
          background: "#FFFFFF",
          position: "relative",
          overflowX: "hidden",
          boxShadow: "0 0 40px rgba(0,0,0,0.15)"
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
