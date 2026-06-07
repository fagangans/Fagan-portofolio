import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DuoLearn - Language Learning",
  description: "Learn languages with DuoLearn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#F7F7F7]">
        <div style={{ maxWidth: 390, margin: "0 auto", minHeight: "100vh", background: "#F7F7F7", position: "relative", overflowX: "hidden" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
