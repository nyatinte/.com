import type { Metadata } from "next";
import { Chivo, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ui/theme-provider";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arctic Blog - Modern Technical Blog Theme",
  description:
    "A modern, Antarctic-inspired blog theme with glacier tones and subtle glass effects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
      </head>
      <body
        className={`${interTight.variable} ${chivo.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
