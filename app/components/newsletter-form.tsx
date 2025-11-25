"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
  };

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-elevated)] px-6 py-4 font-mono text-[var(--text-emphasis)] text-sm placeholder-[var(--text-secondary)]/50 transition-all focus:border-[var(--color-accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)]"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="penguin@nyatinte.dev"
        type="email"
        value={email}
      />
      <button
        className="hover:-translate-y-1 rounded-lg bg-[var(--color-accent-primary)] px-8 py-4 font-bold font-heading text-[var(--bg-primary)] tracking-wide shadow-lg transition-all hover:bg-[var(--color-accent-dark)] hover:shadow-[var(--accent-shadow)]"
        type="submit"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}
