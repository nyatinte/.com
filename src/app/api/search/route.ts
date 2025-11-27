import { stopwords as japaneseStopWords } from "@orama/stopwords/japanese";
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { createFromSource } from "fumadocs-core/search/server";
import { blog as source } from "@/lib/source";

export const { GET } = createFromSource(source, {
  localeMap: {
    ja: {
      components: {
        tokenizer: createTokenizer({
          stopWords: japaneseStopWords,
          language: "mandarin",
        }),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
