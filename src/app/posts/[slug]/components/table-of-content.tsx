"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  className?: string;
};

export function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = document.querySelectorAll("h1, h2");
    const headingsArray: Heading[] = [];

    for (const element of headingElements) {
      if (element.id) {
        headingsArray.push({
          id: element.id,
          text: element.textContent || "",
          level: Number.parseInt(element.tagName.charAt(1), 10),
        });
      }
    }

    setHeadings(headingsArray);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: 1.0,
      }
    );

    const elements = headings.map((h) => document.getElementById(h.id));

    for (const element of elements) {
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      for (const element of elements) {
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, [headings]);

  const handleClick = async (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;

    window.history.pushState({}, "", `#${id}`);

    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error(err);
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="mb-4 font-semibold text-foreground text-sm">
        On this page
      </h4>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                className={cn(
                  "block w-full text-left text-muted-foreground text-sm transition-colors hover:text-foreground",
                  activeId === heading.id &&
                    "font-medium text-primary underline underline-offset-4"
                )}
                onClick={() => handleClick(heading.id)}
                type="button"
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
