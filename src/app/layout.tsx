import type { Metadata, Viewport } from "next";
import "./globals.css";

// ALL providers and global components commented out for isolation
// import { Inter, Playfair_Display } from "next/font/google";
// import { ThemeProvider } from "@/components/ui/ThemeProvider";
// import CustomCursor from "@/components/ui/CustomCursor";
// import ScrollProgress from "@/components/ui/ScrollProgress";
// import LoadingScreen from "@/components/ui/LoadingScreen";
// import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Fagan Fabian Altair — Creative Developer & Designer",
  description:
    "The portfolio of Fagan Fabian Altair — creative developer, designer, and entrepreneur crafting world-class digital experiences.",
  manifest: "/manifest.json",
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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
