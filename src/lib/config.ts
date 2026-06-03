export const SITE = {
  name: "Bahrista",
  tagline: "Seu diário de cafés especiais.",
  email: "bahrista.app@gmail.com",
} as const;

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bahrista.app";

/** URLs públicas no GitHub Pages (project site). */
export const PUBLIC_URLS = {
  home: "https://giovaninb.github.io/bahrista-web/",
  privacy: "https://giovaninb.github.io/bahrista-web/privacy/",
  privacyEn: "https://giovaninb.github.io/bahrista-web/privacy/?lang=en",
  privacyEs: "https://giovaninb.github.io/bahrista-web/privacy/?lang=es",
  terms: "https://giovaninb.github.io/bahrista-web/terms/",
  termsEn: "https://giovaninb.github.io/bahrista-web/terms/?lang=en",
  termsEs: "https://giovaninb.github.io/bahrista-web/terms/?lang=es",
} as const;

export const FEATURES = [
  {
    title: "Diário de degustações",
    description:
      "Registre cafés especiais com notas sensoriais, método, origem e favoritos em menos de um minuto.",
  },
  {
    title: "Listas e catálogo pessoal",
    description:
      "Organize cafés escaneados ou adicionados manualmente em listas que acompanham sua jornada.",
  },
  {
    title: "Vocabulário sensorial",
    description:
      "Explore termos e tags para descrever o que você sente na xícara com mais precisão.",
  },
  {
    title: "Escanear rótulo (OCR local)",
    description:
      "Pré-preencha nome e origem a partir da foto — o reconhecimento de texto roda no seu aparelho.",
  },
  {
    title: "Jornadas e eventos",
    description:
      "Agrupe degustações por experiência: em casa, na cafeteria ou em um festival de café.",
  },
  {
    title: "Conta opcional",
    description:
      "Use o app sem login; entre com Google quando quiser sincronizar perfil e dados na nuvem.",
  },
] as const;
