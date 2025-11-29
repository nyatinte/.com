"use client";

import { Task02Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type CopyMarkdownButtonProps = {
  content: string;
};

export function CopyMarkdownButton({ content }: CopyMarkdownButtonProps) {
  const [isLoading, setLoading] = useState(false);
  const [checked, onClick] = useCopyButton(async () => {
    setLoading(true);

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          /** @see {@link <https://developer.mozilla.org/ja/docs/Web/HTTP/Guides/MIME_types/Common_types>} */
          "text/plain": content,
        }),
      ]);
    } finally {
      setLoading(false);
    }
  });

  return (
    <Button disabled={isLoading} onClick={onClick} size="sm" variant="outline">
      {checked ? (
        <HugeiconsIcon icon={Tick02Icon} />
      ) : (
        <HugeiconsIcon icon={Task02Icon} />
      )}
      Copy Markdown
    </Button>
  );
}
