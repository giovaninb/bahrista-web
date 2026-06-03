# Política de Privacidade — Bahrista

Documento público para publicação em [https://bahrista.app/privacy](https://bahrista.app/privacy).  
Versões em **português**, **inglês** e **espanhol** abaixo. Atualize a data em todas as seções quando revisar o texto.

---

## Português (Brasil)

**Última atualização:** 2 de junho de 2026

### 1. Quem somos

O **Bahrista** (“nós”, “app”) é um diário de cafés especiais para registrar degustações, organizar listas e explorar vocabulário sensorial. Este documento descreve como tratamos dados pessoais quando você usa o aplicativo Bahrista em dispositivos móveis (Android e iOS).

**Contato:** [bahrista.app@gmail.com](mailto:bahrista.app@gmail.com)

### 2. Resumo

- Você pode usar grande parte do app **sem criar conta**; os dados ficam principalmente no seu aparelho.
- Se optar por **entrar com Google**, usamos **Supabase** para autenticação e, quando aplicável, sincronização de perfil e conteúdos na nuvem.
- Fotos de rótulos ou embalagens podem ser processadas por **OCR no próprio dispositivo** (sem envio obrigatório da imagem para OCR em servidor nosso).
- Você pode **excluir sua conta e dados** pelo app, em **Perfil → Conta → Excluir minha conta**, com confirmação explícita.

### 3. Dados que coletamos e para que usamos

| Categoria | Exemplos | Finalidade |
|-----------|----------|------------|
| **Conta (opcional)** | Identificador de usuário, e-mail (via Google), sessão de login | Autenticar, associar dados na nuvem, permitir exclusão de conta |
| **Perfil e preferências** | Nome de exibição, idioma, nível de profundidade sensorial, contraste, métodos de preparo favoritos | Personalizar a experiência e sincronizar preferências (se logado) |
| **Degustações e avaliações** | Nome do café, torrefação, origem, processo, método, notas, notas sensoriais, classificação, favoritos, “quero comprar” | Diário de cafés e estatísticas pessoais |
| **Jornadas e eventos** | Jornadas criadas ou seguidas, contexto (casa, cafeteria, evento) | Organizar degustações por experiência |
| **Listas e cafés salvos** | Listas pessoais, entradas de cafés escaneados ou adicionados manualmente | Catálogo pessoal de cafés |
| **Conteúdos salvos** | Inspirações ou itens que você guarda no app | Acesso offline à sua curadoria |
| **Imagens** | Fotos que você anexa a degustações; imagens usadas no fluxo de **escaneamento de café** | Registro visual e pré-preenchimento de dados a partir do rótulo |
| **Texto extraído por OCR** | Texto reconhecido localmente a partir da sua foto | Sugerir campos (nome, origem, etc.) — você revisa antes de salvar |
| **Dados técnicos** | Versão do app, idioma do sistema, logs de erro limitados | Estabilidade, suporte e melhoria do produto |

Não vendemos seus dados pessoais.

### 4. Uso sem login

Sem conta, o Bahrista armazena degustações, listas, preferências e imagens **no dispositivo** (ou em armazenamento local associado ao app). Esses dados não são enviados automaticamente à nuvem enquanto você não fizer login.

A **Política de Privacidade** permanece acessível no app (Perfil → App, Sobre, onboarding) **sem exigir login**.

### 5. Login com Google e Supabase

Quando você entra com **Google**:

- O provedor de identidade (Google) processa credenciais conforme a política do Google.
- Usamos **[Supabase](https://supabase.com)** (autenticação e banco de dados PostgreSQL hospedado) para:
  - manter sua sessão;
  - armazenar perfil (por exemplo, nome de exibição, idioma, preferências de interface);
  - sincronizar dados de conta quando o produto oferecer sync (listas, conteúdos salvos, etc., conforme evolução do app).

O tratamento na Supabase segue o papel de **operador de infraestrutura** sob nossas instruções. Consulte também a [política de privacidade da Supabase](https://supabase.com/privacy).

### 6. OCR e imagens

No fluxo **Escanear café** (ou equivalente):

- **Android:** reconhecimento de texto via **ML Kit** no dispositivo.
- **iOS:** reconhecimento via **Vision** (Apple) no dispositivo.

A imagem que você escolhe ou fotografa é usada para extrair texto **localmente**. O texto reconhecido e os metadados que você confirma podem ser salvos no app (e na nuvem, se estiver logado). Não enviamos a imagem inteira a um serviço de OCR próprio do Bahrista apenas para extrair texto; o processamento descrito ocorre no aparelho, salvo mudança futura comunicada nesta política.

Fotos de degustação ficam referenciadas no registro (URI/caminho local ou armazenamento vinculado à conta, conforme implementação).

### 7. Inspirações (Pexels)

A seção de **inspirações** pode buscar fotos de terceiros via **[Pexels API](https://www.pexels.com/privacy-policy/)**. Nessa busca, enviamos termos de pesquisa e metadados técnicos à Pexels; **não** enviamos seu diário de degustações. As fotos exibidas são fornecidas pela Pexels e sujeitas aos termos deles.

### 8. Compartilhamento com terceiros

Podemos compartilhar dados apenas:

- com **provedores de serviço** necessários (Supabase, Google OAuth, Pexels, lojas de aplicativos);
- para **cumprir lei** ou proteger direitos, segurança e fraude;
- com seu **consentimento** explícito (por exemplo, ao compartilhar um café por link, se disponível).

### 9. Retenção

- Dados **locais** permanecem até você apagá-los, desinstalar o app ou usar **Excluir minha conta**.
- Dados na **nuvem** (Supabase) permanecem enquanto a conta existir; após exclusão confirmada no app, removemos ou anonimizamos dados associados na medida do possível via rotinas de exclusão (`delete_my_account` e limpeza local).

### 10. Exclusão de conta e direitos

**No app:** Perfil → Conta → **Excluir minha conta** → confirmação com frase digitada.

**O que é apagado (conforme disponível na sua versão):** perfil e preferências; degustações e avaliações; jornadas, favoritos e listas; inspirações salvas; imagens associadas; conta e dados na Supabase, se conectado.

Você também pode solicitar informações, correção ou exclusão por e-mail: **bahrista.app@gmail.com**. Prazos legais da LGPD serão observados.

### 11. Segurança

Adotamos medidas técnicas e organizacionais razoáveis (HTTPS, tokens de sessão, controle de acesso no backend). Nenhum sistema é 100% seguro; em caso de incidente relevante, comunicaremos conforme a lei.

### 12. Crianças

O Bahrista não se destina a menores de 13 anos (ou idade mínima local). Não coletamos intencionalmente dados de crianças.

### 13. Transferências internacionais

Provedores como Google e Supabase podem processar dados em servidores fora do Brasil. Nesses casos, buscamos bases legais e salvaguardas compatíveis com a LGPD.

### 14. Alterações

Podemos atualizar esta política. A data no topo indica a versão vigente. Mudanças relevantes podem ser avisadas no app ou por e-mail.

### 15. Base legal (LGPD)

Dependendo do caso: execução de contrato ou medidas pré-contratuais; legítimo interesse (melhoria e segurança); consentimento (login opcional, OCR voluntário); cumprimento de obrigação legal.

---

## English

**Last updated:** June 2, 2026

### 1. Who we are

**Bahrista** (“we”, “the app”) is a specialty coffee journal to record tastings, organize lists, and explore sensory vocabulary. This policy explains how we handle personal data when you use the Bahrista mobile app (Android and iOS).

**Contact:** [bahrista.app@gmail.com](mailto:bahrista.app@gmail.com)

### 2. Summary

- You can use much of the app **without an account**; data stays primarily on your device.
- If you **sign in with Google**, we use **Supabase** for authentication and, when applicable, cloud sync of profile and content.
- Label or packaging photos may be processed with **on-device OCR** (we do not require sending the image to our own OCR server for text extraction).
- You can **delete your account and data** in the app under **Profile → Account → Delete my account**, with explicit confirmation.

### 3. Data we collect and why

| Category | Examples | Purpose |
|----------|----------|---------|
| **Account (optional)** | User ID, email (via Google), login session | Authenticate, link cloud data, enable account deletion |
| **Profile & preferences** | Display name, language, sensory depth level, contrast, favorite brew methods | Personalize the app and sync preferences (if signed in) |
| **Tastings & ratings** | Coffee name, roaster, origin, process, brew method, notes, sensory tags, rating, favorites, want-to-buy | Personal coffee diary and stats |
| **Journeys & events** | Journeys you create or follow, context (home, café, event) | Organize tastings by experience |
| **Lists & saved coffees** | Personal lists, scanned or manual coffee entries | Personal coffee catalog |
| **Saved content** | Inspirations or items you save in the app | Offline access to your curated items |
| **Images** | Photos attached to tastings; images in the **coffee scan** flow | Visual record and pre-fill from packaging |
| **OCR text** | Text recognized locally from your photo | Suggest fields (name, origin, etc.) — you review before saving |
| **Technical data** | App version, system language, limited error logs | Stability, support, product improvement |

We do not sell your personal data.

### 4. Use without signing in

Without an account, Bahrista stores tastings, lists, preferences, and images **on your device** (or local app storage). This data is not automatically sent to the cloud until you sign in.

The **Privacy Policy** remains available in the app (Profile → App, About, onboarding) **without requiring login**.

### 5. Google sign-in and Supabase

When you sign in with **Google**:

- Google processes credentials under Google’s privacy policy.
- We use **[Supabase](https://supabase.com)** (authentication and hosted PostgreSQL) to:
  - maintain your session;
  - store profile data (e.g. display name, language, UI preferences);
  - sync account-related data when the product offers sync (lists, saved content, etc., as the app evolves).

Supabase acts as an **infrastructure provider** under our instructions. See also [Supabase’s privacy policy](https://supabase.com/privacy).

### 6. OCR and images

In the **Scan coffee** flow:

- **Android:** on-device text recognition via **ML Kit**.
- **iOS:** on-device recognition via Apple **Vision**.

The image you choose or capture is used to extract text **locally**. Recognized text and metadata you confirm may be stored in the app (and in the cloud if signed in). We do not send the full image to a Bahrista-owned OCR service solely for extraction; processing happens on the device unless we notify you otherwise in an updated policy.

Tasting photos are linked in the record (local URI/path or account-linked storage, depending on implementation).

### 7. Inspirations (Pexels)

The **inspirations** section may fetch third-party photos via the **[Pexels API](https://www.pexels.com/privacy-policy/)**. That search sends query terms and technical metadata to Pexels; we do **not** send your tasting diary. Displayed photos are provided by Pexels under their terms.

### 8. Sharing with third parties

We may share data only:

- with **service providers** we need (Supabase, Google OAuth, Pexels, app stores);
- to **comply with law** or protect rights, safety, and fraud prevention;
- with your **explicit consent** (e.g. when sharing a coffee via link, if available).

### 9. Retention

- **Local** data remains until you delete it, uninstall the app, or use **Delete my account**.
- **Cloud** data (Supabase) remains while the account exists; after confirmed in-app deletion, we remove or anonymize associated data where possible via deletion routines (`delete_my_account` and local cleanup).

### 10. Account deletion and your rights

**In the app:** Profile → Account → **Delete my account** → confirmation phrase.

**What is deleted (as available in your version):** profile and preferences; tastings and ratings; journeys, favorites, and lists; saved inspirations; associated images; Supabase account and data if connected.

You may also contact **bahrista.app@gmail.com** for access, correction, or deletion. We will honor applicable legal deadlines (e.g. GDPR where it applies, LGPD in Brazil).

### 11. Security

We use reasonable technical and organizational measures (HTTPS, session tokens, backend access controls). No system is perfectly secure; we will notify you of significant incidents as required by law.

### 12. Children

Bahrista is not directed at children under 13 (or the minimum age in your region). We do not knowingly collect children’s data.

### 13. International transfers

Providers such as Google and Supabase may process data on servers outside your country. We rely on appropriate legal bases and safeguards where required.

### 14. Changes

We may update this policy. The date at the top shows the current version. Material changes may be announced in the app or by email.

### 15. Legal bases

Depending on context: contract or pre-contractual steps; legitimate interests (improvement and security); consent (optional login, voluntary OCR); legal obligation.

---

## Español

**Última actualización:** 2 de junio de 2026

### 1. Quiénes somos

**Bahrista** (“nosotros”, “la app”) es un diario de cafés especiales para registrar degustaciones, organizar listas y explorar vocabulario sensorial. Esta política describe cómo tratamos datos personales cuando usas la aplicación Bahrista en dispositivos móviles (Android e iOS).

**Contacto:** [bahrista.app@gmail.com](mailto:bahrista.app@gmail.com)

### 2. Resumen

- Puedes usar gran parte de la app **sin crear cuenta**; los datos permanecen principalmente en tu dispositivo.
- Si **inicias sesión con Google**, usamos **Supabase** para autenticación y, cuando corresponda, sincronización de perfil y contenidos en la nube.
- Las fotos de etiquetas o envases pueden procesarse con **OCR en el propio dispositivo** (no exigimos enviar la imagen a un servidor nuestro solo para extraer texto).
- Puedes **eliminar tu cuenta y datos** en la app: **Perfil → Cuenta → Eliminar mi cuenta**, con confirmación explícita.

### 3. Datos que recopilamos y para qué

| Categoría | Ejemplos | Finalidad |
|-----------|----------|-----------|
| **Cuenta (opcional)** | ID de usuario, correo (vía Google), sesión | Autenticar, vincular datos en la nube, permitir eliminación de cuenta |
| **Perfil y preferencias** | Nombre visible, idioma, nivel sensorial, contraste, métodos favoritos | Personalizar la experiencia y sincronizar (si hay sesión) |
| **Degustaciones y valoraciones** | Nombre del café, tostadora, origen, proceso, método, notas, etiquetas sensoriales, puntuación, favoritos, “quiero comprar” | Diario personal de cafés |
| **Viajes y eventos** | Viajes creados o seguidos, contexto (casa, cafetería, evento) | Organizar degustaciones |
| **Listas y cafés guardados** | Listas personales, entradas escaneadas o manuales | Catálogo personal |
| **Contenidos guardados** | Inspiraciones u ítems que guardas en la app | Acceso offline a tu curación |
| **Imágenes** | Fotos en degustaciones; imágenes del flujo de **escaneo de café** | Registro visual y autocompletar desde la etiqueta |
| **Texto OCR** | Texto reconocido localmente en tu foto | Sugerir campos — tú revisas antes de guardar |
| **Datos técnicos** | Versión de la app, idioma del sistema, registros de error limitados | Estabilidad, soporte y mejora |

No vendemos tus datos personales.

### 4. Uso sin iniciar sesión

Sin cuenta, Bahrista guarda degustaciones, listas, preferencias e imágenes **en el dispositivo**. Esos datos no se envían automáticamente a la nube hasta que inicies sesión.

La **Política de Privacidad** está disponible en la app (Perfil → App, Acerca de, onboarding) **sin exigir login**.

### 5. Inicio de sesión con Google y Supabase

Al entrar con **Google**:

- Google procesa credenciales según su política de privacidad.
- Usamos **[Supabase](https://supabase.com)** para sesión, perfil (nombre, idioma, preferencias de interfaz) y sincronización cuando el producto la ofrezca.

Supabase actúa como **proveedor de infraestructura** bajo nuestras instrucciones. Consulta la [política de privacidad de Supabase](https://supabase.com/privacy).

### 6. OCR e imágenes

En **Escanear café**:

- **Android:** reconocimiento de texto con **ML Kit** en el dispositivo.
- **iOS:** reconocimiento con **Vision** (Apple) en el dispositivo.

La imagen se usa para extraer texto **localmente**. El texto y metadatos que confirmas pueden guardarse en la app (y en la nube si hay sesión). No enviamos la imagen completa a un servicio OCR propio de Bahrista solo para extraer texto, salvo cambio futuro comunicado aquí.

### 7. Inspiraciones (Pexels)

La sección de **inspiraciones** puede usar la **[API de Pexels](https://www.pexels.com/privacy-policy/)**. Enviamos términos de búsqueda y metadatos técnicos a Pexels; **no** enviamos tu diario de degustaciones.

### 8. Compartir con terceros

Solo compartimos datos con **proveedores necesarios** (Supabase, Google OAuth, Pexels, tiendas de apps), para **cumplir la ley** o con tu **consentimiento** explícito.

### 9. Conservación

- Datos **locales** hasta que los borres, desinstales la app o uses **Eliminar mi cuenta**.
- Datos en **Supabase** mientras exista la cuenta; tras eliminación confirmada en la app, borramos o anonimizamos lo posible (`delete_my_account` y limpieza local).

### 10. Eliminación de cuenta y derechos

**En la app:** Perfil → Cuenta → **Eliminar mi cuenta** → frase de confirmación.

**Se elimina (según tu versión):** perfil y preferencias; degustaciones; viajes, favoritos y listas; inspiraciones guardadas; imágenes asociadas; cuenta y datos en Supabase si estabas conectado.

También puedes escribir a **bahrista.app@gmail.com** para acceso, rectificación o supresión.

### 11. Seguridad

Medidas técnicas y organizativas razonables (HTTPS, tokens de sesión, controles de acceso). Ningún sistema es perfectamente seguro.

### 12. Menores

Bahrista no está dirigida a menores de 13 años (o la edad mínima local).

### 13. Transferencias internacionales

Proveedores como Google y Supabase pueden procesar datos fuera de tu país, con las garantías que exija la ley aplicable.

### 14. Cambios

Podemos actualizar esta política. La fecha superior indica la versión vigente.

### 15. Bases legales

Según el caso: contrato; interés legítimo; consentimiento (login opcional, OCR voluntario); obligación legal.

---

## Publicação

| Idioma | URL sugerida |
|--------|----------------|
| PT (padrão do site) | `https://bahrista.app/privacy` |
| EN | `https://bahrista.app/privacy?lang=en` o página dedicada |
| ES | `https://bahrista.app/privacy?lang=es` ou página dedicada |

Implementação no app: `AppLegalUrls.kt` → `PRIVACY_POLICY_URL`.

Checklist técnico e de lojas: [privacy-in-app.md](./privacy-in-app.md).
