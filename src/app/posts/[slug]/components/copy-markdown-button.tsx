"use client";

import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type CopyMarkdownButtonProps = {
  markdownUrl: string;
};

const cache = new Map<string, string>();

export function CopyMarkdownButton({ markdownUrl }: CopyMarkdownButtonProps) {
  const [isLoading, setLoading] = useState(false);
  const [checked, onClick] = useCopyButton(async () => {
    const cached = cache.get(markdownUrl);
    if (cached) {
      return navigator.clipboard.writeText(cached);
    }

    setLoading(true);

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": fetch(markdownUrl).then(async (res) => {
            const content = await res.text();
            cache.set(markdownUrl, content);

            return content;
          }),
        }),
      ]);
    } finally {
      setLoading(false);
    }
  });

  return (
    <Button disabled={isLoading} onClick={onClick} size="sm" variant="ghost">
      {checked ? "Copied!" : "Copy Markdown"}
    </Button>
  );
}
