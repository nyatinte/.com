import { readFileSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { type BlogPage, blog } from "@/lib/source";

export const revalidate = false;

type RouteContext = {
  params: Promise<{ slug: string[] }>;
};

let cachedBackgroundData: string | null = null;
let cachedFontData: ArrayBuffer | null = null;

const getFontData = (): ArrayBuffer => {
  if (cachedFontData) {
    return cachedFontData;
  }

  const fontPath = join(process.cwd(), "public/NotoSansJP-Bold.ttf");
  const fontBuffer = readFileSync(fontPath);
  cachedFontData = fontBuffer.buffer;
  return cachedFontData;
};

const getBackgroundData = (): string => {
  if (cachedBackgroundData) {
    return cachedBackgroundData;
  }

  const backgroundPath = join(
    process.cwd(),
    "public",
    "ogimage-background.svg"
  );
  const backgroundBuffer = readFileSync(backgroundPath);
  cachedBackgroundData = `data:image/svg+xml;base64,${backgroundBuffer.toString("base64")}`;
  return cachedBackgroundData;
};

export async function GET(_req: Request, { params }: RouteContext) {
  const { slug } = await params;
  const postSlug = slug.slice(0, -1);
  const post = blog.getPage(postSlug) as BlogPage | undefined;

  if (!post) {
    notFound();
  }

  const backgroundData = getBackgroundData();
  const fontData = getFontData();

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2E3440",
        fontFamily: "Noto Sans JP",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse requires native <img> tag */}
      <img
        alt=""
        height={630}
        src={backgroundData}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        width={1200}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#88C0D0",
              letterSpacing: "0.5px",
            }}
          >
            nyatinte.com
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {post.data.tags?.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "#88C0D0",
                  color: "#2E3440",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "65%",
          }}
        >
          <div
            style={{
              fontSize: "68px",
              fontWeight: "700",
              color: "#ECEFF4",
              lineHeight: "1.1",
              textShadow:
                "1px 1px 0 #2E3440, -1px -1px 0 #2E3440, 1px -1px 0 #2E3440, -1px 1px 0 #2E3440, 0 3px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            {post.data.title}
          </div>

          <div
            style={{
              fontSize: "26px",
              color: "#D8DEE9",
              lineHeight: "1.6",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            {post.data.description}
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}

export function generateStaticParams() {
  return (blog.getPages() as BlogPage[]).map((post) => ({
    slug: [...post.slugs, "image.png"],
  }));
}
