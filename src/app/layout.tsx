import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
      <body
        className={`${fontVariables} min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <Provider>
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 md:gap-24 md:px-12 md:py-12">
            <Header />
            <main className="flex flex-col gap-16 md:gap-24">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
