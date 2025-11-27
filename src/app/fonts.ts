import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import {
  Chivo,
  Inter_Tight,
  JetBrains_Mono,
  Noto_Sans_JP,
  Plus_Jakarta_Sans,
  Unbounded,
} from "next/font/google";

export const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const fontVariables = (
  [
    interTight,
    chivo,
    jetbrainsMono,
    unbounded,
    plusJakartaSans,
    notoSansJP,
  ] satisfies NextFontWithVariable[]
)
  .map((font) => font.variable)
  .join(" ");
