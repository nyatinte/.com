"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

type CopyMarkdownButtonProps = {
  markdown: string;
};

export function CopyMarkdownButton({ markdown }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleCopy = () => {
    startTransition(async () => {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button disabled={isPending} onClick={handleCopy} size="sm" variant="ghost">
      {copied ? "Copied!" : "Copy Markdown"}
    </Button>
  );
}
