# Bahrista Web

Site portfolio estático do **Bahrista** para [GitHub Pages](https://giovaninb.github.io/bahrista-web/).

## URLs publicadas

| Página | URL |
|--------|-----|
| Início | https://giovaninb.github.io/bahrista-web/ |
| Política de Privacidade (PT) | https://giovaninb.github.io/bahrista-web/privacy/ |
| Privacy Policy (EN) | https://giovaninb.github.io/bahrista-web/privacy/?lang=en |
| Política de Privacidad (ES) | https://giovaninb.github.io/bahrista-web/privacy/?lang=es |
| Termos de Uso (PT) | https://giovaninb.github.io/bahrista-web/terms/ |
| Terms of Use (EN) | https://giovaninb.github.io/bahrista-web/terms/?lang=en |
| Términos de Uso (ES) | https://giovaninb.github.io/bahrista-web/terms/?lang=es |
| Exclusão de conta (PT) | https://giovaninb.github.io/bahrista-web/delete-account/ |
| Delete account (EN) | https://giovaninb.github.io/bahrista-web/delete-account/?lang=en |
| Eliminar cuenta (ES) | https://giovaninb.github.io/bahrista-web/delete-account/?lang=es |

**Google Play:** [com.bahrista.app](https://play.google.com/store/apps/details?id=com.bahrista.app)  
**App Store:** em breve.

## Alinhar com o app (KMP)

O app mobile ainda referencia `https://bahrista.app/privacy` em `AppLegalUrls.kt`. Para abrir a política hospedada no GitHub Pages, atualize em `bahrista-kmp`:

```kotlin
const val PRIVACY_POLICY_URL =
    "https://giovaninb.github.io/bahrista-web/privacy/"
```

Use as mesmas URLs na **Play Console** e no **App Store Connect** como link público da política de privacidade.

A fonte canônica dos textos legais é [`bahrista-kmp/docs/`](../bahrista-kmp/docs/) (`privacy-policy.md`, `terms-of-use.md`). Cópias versionadas ficam em `src/data/` (o CI não acessa o repo KMP — ele pode ser privado).

## Desenvolvimento local

Requisitos: Node.js 20+ e o repositório `bahrista-kmp` ao lado desta pasta:

```
bahrista/
├── bahrista-kmp/
└── bahrista-web/
```

```bash
cd bahrista-web
npm install
npm run dev
```

Abra http://localhost:4321/bahrista-web/

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Crie o repositório `giovaninb/bahrista-web` e envie este diretório.
2. Em **Settings → Pages**, escolha **Source: GitHub Actions**.
3. O workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) roda em cada push na branch `main`.

### Atualizar ícones do app

Copia ícones de `bahrista-kmp/composeApp/src/androidMain/res` e `playstore-icon.png`:

```bash
npm run sync:assets
git add public/images/
git commit -m "chore: sync app icons from KMP"
git push
```

### Atualizar a política de privacidade

Depois de editar `bahrista-kmp/docs/privacy-policy.md`:

```bash
npm run sync:privacy
git add src/data/privacy-policy.md
git commit -m "chore: sync privacy policy from KMP"
git push
```

### Atualizar termos de uso

Depois de editar `bahrista-kmp/docs/terms-of-use.md`:

```bash
npm run sync:terms
git add src/data/terms-of-use.md
git commit -m "chore: sync terms of use from KMP"
git push
```

## Estrutura

- `src/pages/index.astro` — landing portfolio
- `src/pages/privacy.astro` — política (PT / EN / ES via `?lang=`)
- `src/pages/terms.astro` — termos de uso (PT / EN / ES via `?lang=`)
- `scripts/sync-privacy.mjs` — cópia local do markdown da política
- `scripts/sync-terms.mjs` — cópia local do markdown dos termos
- `src/styles/bahrista.css` — tokens do design system do app
