export const generateCopyright = (
  startYear: number,
  author = "Nyatinte"
): string => {
  const currentYear = new Date().getFullYear();
  if (startYear > currentYear) {
    throw new Error("startYear は現在の年より前である必要があります。");
  }
  return startYear === currentYear
    ? `© ${startYear} ${author}`
    : `© ${startYear} - ${currentYear} ${author}`;
};
