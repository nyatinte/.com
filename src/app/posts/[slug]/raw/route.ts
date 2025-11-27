import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;

  try {
    const filePath = path.join(process.cwd(), "contents/posts", `${slug}.mdx`);
    const content = await fs.readFile(filePath, "utf-8");

    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Failed to read markdown file:", error);
    return new NextResponse("File not found", { status: 404 });
  }
}
