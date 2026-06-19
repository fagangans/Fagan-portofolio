import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { name, tagline, shortBio } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${name} — ${tagline}`,
  description: `The portfolio of ${name} — ${shortBio}`,
  manifest: "/manifest.json",
  keywords: [name, "Creative Developer", "Designer", "Portfolio", "Web Development"],
  authors: [{ name }],
  openGraph: {
    title: `${name} — ${tagline}`,
    description: shortBio,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-black text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LoadingScreen />
          <SmoothScroll />
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
        <Script
          src="http://localhost:3001/widget/chat-widget.js"
          data-widget-key="ac8cba33-5132-4a0d-b6ef-ffe065e02fe8"
          data-api-url="http://localhost:3001/api/chat"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
