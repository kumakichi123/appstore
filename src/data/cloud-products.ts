import type { Lang } from "@/lib/i18n";

export type LocalizedText = Record<Lang, string>;

export type CloudProduct = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  href: string;
  badge: LocalizedText;
  ctaLabel: LocalizedText;
};

const thoughtAmplifierUrl =
  process.env.NEXT_PUBLIC_THOUGHT_AMPLIFIER_URL ?? "https://example.com/thought-amplifier";

export const cloudProducts: CloudProduct[] = [
  {
    slug: "thought-amplifier",
    name: {
      ja: "思考戯画",
      en: "Thought Amplifier",
    },
    description: {
      ja: "AIを用いた思考の拡張に特化したチャットツールです。AI同士を対話させたり、AIの回答を比較したりできます。",
      en: "A chat tool specialized for AI-assisted thought expansion. It can make AIs talk to each other and compare their answers.",
    },
    image: "/products/thought-amplifier.png",
    href: thoughtAmplifierUrl,
    badge: {
      ja: "クラウドツール",
      en: "Cloud Tool",
    },
    ctaLabel: {
      ja: "サイトを開く",
      en: "Open App",
    },
  },
];
