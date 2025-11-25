"use client";

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type PagefindUI = {
  new (options: {
    element: string | HTMLElement;
    showImages?: boolean;
  }): {
    destroy(): void;
  };
};

declare global {
  // biome-ignore lint/style/useConsistentTypeDefinitions: Window interface augmentation requires interface
  interface Window {
    PagefindUI?: PagefindUI;
  }
}

export function SearchBar() {
  const searchRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pagefindInstance = useRef<ReturnType<
    PagefindUI["prototype"]["constructor"]
  > | null>(null);

  useEffect(() => {
    if (isOpen && searchRef.current && !pagefindInstance.current) {
      // Pagefind UIのCSSとJSを動的に読み込み
      const loadPagefind = () => {
        // CSS読み込み
        if (
          !document.querySelector('link[href="/_pagefind/pagefind-ui.css"]')
        ) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "/_pagefind/pagefind-ui.css";
          document.head.appendChild(link);
        }

        // JS読み込み
        if (!window.PagefindUI) {
          const script = document.createElement("script");
          script.src = "/_pagefind/pagefind-ui.js";
          script.onload = () => {
            if (window.PagefindUI && searchRef.current) {
              pagefindInstance.current = new window.PagefindUI({
                element: searchRef.current,
                showImages: false,
              });
            }
          };
          document.body.appendChild(script);
        } else if (searchRef.current) {
          pagefindInstance.current = new window.PagefindUI({
            element: searchRef.current,
            showImages: false,
          });
        }
      };

      loadPagefind();
    }

    return () => {
      if (pagefindInstance.current) {
        pagefindInstance.current.destroy();
        pagefindInstance.current = null;
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* 検索トリガーボタン */}
      <button
        aria-label="サイト内検索を開く"
        className="group flex items-center gap-3 rounded-full border border-border bg-card/50 px-6 py-3 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-lg"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Search className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        <span className="text-muted-foreground text-sm">記事を検索...</span>
        <kbd className="hidden rounded bg-muted px-2 py-1 font-mono text-muted-foreground text-xs sm:inline-block">
          ⌘K
        </kbd>
      </button>

      {/* 検索モーダル */}
      {isOpen && (
        // biome-ignore lint/a11y/noNoninteractiveElementInteractions: Modal overlay requires click handler for dismiss
        <div
          aria-label="サイト内検索"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-20 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsOpen(false);
            }
          }}
          role="dialog"
        >
          <div className="fade-in slide-in-from-top-4 w-full max-w-2xl animate-in duration-200">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <div className="pagefind-search" ref={searchRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
