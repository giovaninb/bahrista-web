import { readFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";

export type LegalLang = "pt" | "en" | "es";

const SECTION_MARKERS: { lang: LegalLang; heading: string }[] = [
  { lang: "pt", heading: "## Português (Brasil)" },
  { lang: "en", heading: "## English" },
  { lang: "es", heading: "## Español" },
];

const PUBLICATION_HEADING = "## Publicação";

export function loadLegalMarkdown(filename: string): string {
  const filePath = join(process.cwd(), "src/data", filename);
  return readFileSync(filePath, "utf-8");
}

export function parseLegalSections(
  markdown: string,
): Record<LegalLang, string> {
  const publicationIndex = markdown.indexOf(PUBLICATION_HEADING);
  const body =
    publicationIndex >= 0 ? markdown.slice(0, publicationIndex) : markdown;

  const sections: Record<LegalLang, string> = { pt: "", en: "", es: "" };

  for (let i = 0; i < SECTION_MARKERS.length; i++) {
    const { lang, heading } = SECTION_MARKERS[i];
    const start = body.indexOf(heading);
    if (start < 0) continue;

    const contentStart = start + heading.length;
    let end = body.length;
    for (let j = i + 1; j < SECTION_MARKERS.length; j++) {
      const next = body.indexOf(SECTION_MARKERS[j].heading);
      if (next >= 0) {
        end = next;
        break;
      }
    }
    sections[lang] = body.slice(contentStart, end).trim();
  }

  return sections;
}

export function renderLegalHtml(markdownSection: string): string {
  return marked.parse(markdownSection, { async: false }) as string;
}

export function normalizeLang(value: string | null): LegalLang {
  const v = value?.toLowerCase();
  if (v === "en" || v === "english") return "en";
  if (v === "es" || v === "spanish" || v === "español") return "es";
  return "pt";
}

export const LEGAL_LANG_LABELS: Record<
  LegalLang,
  { code: LegalLang; label: string }
> = {
  pt: { code: "pt", label: "Português" },
  en: { code: "en", label: "English" },
  es: { code: "es", label: "Español" },
};
