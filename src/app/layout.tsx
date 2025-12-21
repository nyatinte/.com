import "./globals.css";
import type { Metadata } from "next";
import { AuroraBackground } from "@/components/layout/aurora-background";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
        <ReactGrab />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <AuroraBackground />
        <Provider>
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 md:gap-24 md:px-12 md:py-12">
            <Header />
            <main className="flex flex-col gap-16 md:gap-24">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
