const WHITESPACE_REGEX = /\s+/;
const WORDS_PER_MINUTE = 200;

export const calculateReadingTime = (content: string): number => {
  const trimmed = content.trim();
  if (!trimmed) {
    // 空のコンテンツの場合は最小読書時間として1分を返す
    return 1;
  }
  const words = trimmed.split(WHITESPACE_REGEX).length;
  return Math.ceil(words / WORDS_PER_MINUTE);
};
