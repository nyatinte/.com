import { Github, Twitter } from "lucide-react";
import { SocialLink } from "./ui/social-link";

export function FooterSocial() {
  return (
    <div>
      <h4 className="mb-6 font-bold font-mono text-[var(--text-emphasis)] text-xs uppercase tracking-widest">
        Connect
      </h4>
      <div className="flex gap-4">
        <SocialLink href="#" icon={Github} label="GitHub" />
        <SocialLink href="#" icon={Twitter} label="Twitter" />
      </div>
    </div>
  );
}
