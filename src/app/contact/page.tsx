import {
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import { ContactHeader } from "@/components/contact-header";
import { ZennIcon } from "@/components/icons/zenn-icon";
import { LinkButton } from "@/components/ui/link-button";
import { NYATINTE } from "@/constant/nyatinte";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Nyatinteへのお問い合わせ・SNSリンク。GitHub、X、Zenn、メールでご連絡いただけます。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center">
      <ContactHeader
        imageSrc="/nyatinte.webp"
        name="Nyatinte"
        tagline="AIとWeb技術に興味があります。"
      />

      <div className="fade-in slide-in-from-bottom-5 flex w-full animate-in flex-col gap-4 delay-200 duration-800">
        <LinkButton
          href={NYATINTE.x.url}
          subtitle={`@${NYATINTE.x.id}`}
          title="X / Twitter"
        >
          <HugeiconsIcon icon={NewTwitterIcon} size={24} />
        </LinkButton>

        <LinkButton
          href={NYATINTE.github.url}
          subtitle={`@${NYATINTE.github.id}`}
          title="GitHub"
        >
          <HugeiconsIcon icon={GithubIcon} size={24} />
        </LinkButton>

        <LinkButton
          href={NYATINTE.zenn.url}
          subtitle={`@${NYATINTE.zenn.id}`}
          title="Zenn"
        >
          <ZennIcon className="h-6 w-6" />
        </LinkButton>

        <LinkButton
          href={NYATINTE.email.url}
          subtitle={NYATINTE.email.address}
          title="Email"
        >
          <HugeiconsIcon icon={Mail01Icon} size={24} />
        </LinkButton>
      </div>
    </div>
  );
}
