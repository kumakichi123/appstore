export type Lang = "ja" | "en";

export const LANG_COOKIE_NAME = "lang";

export function resolveLang(value: string | undefined): Lang {
  return value === "en" ? "en" : "ja";
}
