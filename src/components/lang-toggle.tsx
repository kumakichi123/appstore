"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

import { LANG_COOKIE_NAME, type Lang } from "@/lib/i18n";

type LangToggleProps = {
  lang: Lang;
};

export function LangToggle({ lang }: LangToggleProps) {
  const router = useRouter();

  const setLang = (nextLang: Lang) => {
    if (nextLang === lang) {
      return;
    }

    document.cookie = `${LANG_COOKIE_NAME}=${nextLang}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="lang-toggle" aria-label="Language switcher">
      <button
        type="button"
        className={lang === "ja" ? "lang-button is-active" : "lang-button"}
        onClick={() => setLang("ja")}
        aria-pressed={lang === "ja"}
      >
        日本語
      </button>
      <button
        type="button"
        className={lang === "en" ? "lang-button is-active" : "lang-button"}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        English
      </button>
    </div>
  );
}
