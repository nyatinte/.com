import { blog as blogCollection } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";

export const blog = loader({
  baseUrl: "/posts",
  source: blogCollection.toFumadocsSource(),
});

export type BlogPage = InferPageType<typeof blog>;

export function getPageImage(page: BlogPage) {
  const segments = [...page.slugs, "image.png"];
  return {
    segments,
    url: `/og/posts/${segments.join("/")}`,
  };
}
