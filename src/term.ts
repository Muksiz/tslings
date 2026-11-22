const useColor = process.stdout.isTTY && !process.env.NO_COLOR;

const wrap = (open: string, close: string) => (s: string) =>
  useColor ? `\x1b[${open}m${s}\x1b[${close}m` : s;

export const bold = wrap("1", "22");
export const dim = wrap("2", "22");
export const red = wrap("31", "39");
export const green = wrap("32", "39");
export const yellow = wrap("33", "39");
export const blue = wrap("34", "39");
export const cyan = wrap("36", "39");
export const inverse = wrap("7", "27");

/** A clickable link in terminals that support OSC 8 hyperlinks. */
export function link(text: string, url: string): string {
  return useColor ? `\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\` : text;
}

export function clearScreen(): void {
  process.stdout.write("\x1b[2J\x1b[3J\x1b[H");
}

export function progressBar(done: number, total: number, width = 50): string {
  const filled = total === 0 ? 0 : Math.round((done / total) * width);
  const bar = "#".repeat(filled) + (filled < width ? ">" : "") + "-".repeat(Math.max(0, width - filled - 1));
  return `Progress: [${green(bar.slice(0, filled))}${bar.slice(filled)}] ${done}/${total}`;
}
