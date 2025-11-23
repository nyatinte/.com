import type { LucideProps } from "lucide-react";
import { Github, Twitter } from "lucide-react";
import type { ComponentType } from "react";

type SocialLink = {
  url: string;
  icon: ComponentType<LucideProps>;
  label: string;
};

export const NYATINTE = {
  x: {
    url: "https://x.com/nyatinte",
    icon: Twitter,
    label: "X (Twitter)",
  },
  github: {
    url: "https://github.com/nyatinte",
    icon: Github,
    label: "GitHub",
  },
} as const satisfies Record<string, SocialLink>;
