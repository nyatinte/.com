import type { ReactNode } from "react";

type PostsLayoutProps = {
  children: ReactNode;
};

export default function PostsLayout({ children }: PostsLayoutProps) {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}
