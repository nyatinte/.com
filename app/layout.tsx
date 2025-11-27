import "./globals.css";
import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import { Provider } from "./provider";
import { ReactGrab } from "./react-grab";

export const metadata: Metadata = {
  title: "Nyatinte.com",
  description: "Web技術とAI、たまにゲームの記事を書きます",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // WHY: next-themeのdarkmodeサポートのため: <https://github.com/pacocoursey/next-themes#with-app>
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
