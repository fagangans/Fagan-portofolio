import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import MotionProvider from "@/components/ui/MotionProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
  title: "Fagan Fabian Altair — Creative Developer & Designer",
  description:
    "The portfolio of Fagan Fabian Altair — creative developer, designer, and entrepreneur crafting world-class digital experiences.",
  manifest: "/manifest.json",
  keywords: [
    "Fagan Fabian Altair",
    "Creative Developer",
    "Designer",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Fagan Fabian Altair" }],
  openGraph: {
    title: "Fagan Fabian Altair — Creative Developer & Designer",
    description: "World-class luxury portfolio.",
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
          <MotionProvider>
            {/* ISOLATION ROUND 1: disabled to find ReactCurrentBatchConfig source */}
            {/* <LoadingScreen /> */}
            <SmoothScroll />
            {/* <CustomCursor /> */}
            {/* <ScrollProgress /> */}
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
