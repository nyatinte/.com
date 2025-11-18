const MARKDOWN_SYMBOLS_REGEX = /[#*`[\]]/g;
const DEFAULT_EXCERPT_LENGTH = 160;

export const generateExcerpt = (
  content: string,
  length = DEFAULT_EXCERPT_LENGTH
): string => {
  const text = content.replace(MARKDOWN_SYMBOLS_REGEX, "").trim();
  return text.length > length ? `${text.slice(0, length)}...` : text;
};
