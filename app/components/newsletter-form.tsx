"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-elevated)] px-6 py-4 font-mono text-[var(--text-emphasis)] text-sm placeholder-[var(--text-secondary)]/50 transition-all focus:border-[#88C0D0] focus:outline-none focus:ring-1 focus:ring-[#88C0D0]"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="penguin@nyatinte.dev"
        type="email"
        value={email}
      />
      <button
        className="hover:-translate-y-1 rounded-lg bg-[#88C0D0] px-8 py-4 font-bold font-heading text-[var(--bg-primary)] tracking-wide shadow-lg transition-all hover:bg-[#5E81AC] hover:shadow-[#88C0D0]/30"
        type="submit"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}
