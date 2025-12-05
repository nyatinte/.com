import Script from "next/script";

/** @see {@link https://github.com/aidenybai/react-grab#nextjs-app-router} */
export function ReactGrab() {
  if (process.env.NODE_ENV === "development") {
    return (
      <Script
        crossOrigin="anonymous"
        data-enabled="true"
        src="//unpkg.com/react-grab/dist/index.global.js"
        strategy="beforeInteractive"
      />
    );
  }
}
