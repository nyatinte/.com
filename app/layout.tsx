import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { DefaultSearchDialog } from "./components/ui/search";
import { ThemeProvider } from "./components/ui/theme-provider";
import { fontVariables } from "./fonts";
import { ReactGrab } from "./react-grag";

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
        <ReactGrab />
      </head>
      <body className={`${fontVariables} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <RootProvider
            search={{
              SearchDialog: DefaultSearchDialog,
            }}
          >
            {children}
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
