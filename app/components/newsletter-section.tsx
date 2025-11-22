import { Mail } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5E81AC]/10" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 animate-float items-center justify-center rounded-full border border-[#88C0D0]/30 bg-[var(--bg-elevated)] shadow-[0_0_30px_rgba(136,192,208,0.2)] backdrop-blur">
          <Mail className="h-8 w-8 text-[#88C0D0]" />
        </div>
        <h2 className="mb-6 font-bold font-heading text-4xl text-[var(--text-emphasis)] md:text-5xl">
          JOIN THE EXPEDITION
        </h2>
        <p className="mx-auto mb-10 max-w-xl font-body text-[var(--text-secondary)] text-lg">
          最新の技術トレンド分析と、開発の裏側にあるストーリーを
          <br />
          あなたの受信箱へ直送します。
        </p>

        <NewsletterForm />

        <p className="mt-6 font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
          No spam. Only code & ice.
        </p>
      </div>
    </section>
  );
}
