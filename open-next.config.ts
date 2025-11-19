import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // R2キャッシュは無効化(デフォルトのメモリキャッシュを使用)
});
