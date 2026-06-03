import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "../bahrista-kmp/docs/privacy-policy.md");
const targetDir = join(root, "src/data");
const target = join(targetDir, "privacy-policy.md");

if (!existsSync(source)) {
  if (existsSync(target)) {
    console.warn(
      `Fonte não encontrada (${source}); usando cópia existente em ${target}`,
    );
    process.exit(0);
  }
  console.error(
    `Arquivo não encontrado: ${source}\n` +
      "Esperado ao lado de bahrista-web: ../bahrista-kmp/docs/privacy-policy.md",
  );
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);
console.log(`Política sincronizada → ${target}`);
