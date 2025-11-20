"use client";

import { useState, useTransition } from "react";
import { Button } from "@/app/components/ui/button";

type CopyMarkdownButtonProps = {
  markdown: string;
};

export function CopyMarkdownButton({ markdown }: CopyMarkdownButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      startTransition(() => {
        setCopied(true);
      });
      setTimeout(() => {
        startTransition(() => {
          setCopied(false);
        });
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Button disabled={isPending} onClick={handleCopy} size="sm" variant="ghost">
      {copied ? "Copied!" : "Copy Markdown"}
    </Button>
  );
}
