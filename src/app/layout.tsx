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
          src="https://api.faiagent.my.id/widget/chat-widget.js"
          data-widget-key="a43bc61b-4aac-49cd-881f-f4de6ab96191"
          data-api-url="https://api.faiagent.my.id/api/chat"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
