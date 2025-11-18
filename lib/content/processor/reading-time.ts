const WHITESPACE_REGEX = /\s+/;
const WORDS_PER_MINUTE = 200;

export const calculateReadingTime = (content: string): number => {
  const words = content.trim().split(WHITESPACE_REGEX).length;
  return Math.ceil(words / WORDS_PER_MINUTE);
};
