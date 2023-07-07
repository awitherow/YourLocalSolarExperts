export function isEmpty(obj: any) {
  return (
    Object.prototype.toString.call(obj) === "[object Object]" &&
    JSON.stringify(obj) === "{}"
  );
}

export function toKebabCase(str: string): string {
  return str
    .toLowerCase() // convert to lowercase
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // remove non-alphanumeric characters except hyphens
    .replace(/--+/g, "-") // replace consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // remove leading and trailing hyphens
}

export function trimText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}

export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function reverseKebabToTitleCase(kebabCase: string): string {
  const words = kebabCase.split("-");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = toTitleCase(word);
  }

  return words.join(" ");
}

export function calculateReadingTime(wordCount: number): string {
  const wordsPerMinute = 200;
  const minutes = Math.round(wordCount / wordsPerMinute);
  return `Reading Time: ${minutes} minute${minutes === 1 ? "" : "s"}`;
}
