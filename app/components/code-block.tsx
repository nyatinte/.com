"use client";

import { useState } from "react";
import { cn, twx } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

const TrafficLight = twx.div<{ color: "red" | "yellow" | "green" }>((props) =>
  cn(
    "h-3 w-3 rounded-full",
    props.color === "red" && "bg-red-400",
    props.color === "yellow" && "bg-yellow-400",
    props.color === "green" && "bg-green-400"
  )
);

export function CodeBlock({
  code,
  language: _language = "tsx",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-arctic-md border bg-linear-to-br from-[#1a2332] to-[#0f1724] shadow-lg">
      <div className="flex items-center justify-between border-white/10 border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <TrafficLight color="red" />
            <TrafficLight color="yellow" />
            <TrafficLight color="green" />
          </div>
          {filename && (
            <span className="ml-2 font-arctic-mono text-gray-400 text-sm">
              {filename}
            </span>
          )}
        </div>
        <button
          className="rounded-full px-3 py-1 font-arctic-mono text-gray-400 text-xs transition-all hover:bg-white/10 hover:text-white"
          onClick={copyToClipboard}
          type="button"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <pre className="p-4">
          <code className="font-arctic-mono text-gray-200 text-sm leading-relaxed">
            {code}
          </code>
        </pre>
      </div>

      <div className="-right-10 -top-10 pointer-events-none absolute h-40 w-40 rounded-full bg-[hsl(var(--primary))] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
    </div>
  );
}
