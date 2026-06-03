import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const kmp = join(root, "../bahrista-kmp/composeApp/src");

const copies = [
  {
    src: join(kmp, "androidMain/playstore-icon.png"),
    dest: join(root, "public/images/bahrista-icon.png"),
  },
  {
    src: join(
      kmp,
      "androidMain/res/mipmap-xxxhdpi/ic_launcher_round.png",
    ),
    dest: join(root, "public/images/bahrista-icon-round.png"),
  },
  {
    src: join(
      kmp,
      "commonMain/composeResources/drawable/bahrista_launcher_foreground.png",
    ),
    dest: join(root, "public/images/bahrista-launcher-foreground.png"),
  },
];

mkdirSync(join(root, "public/images"), { recursive: true });

for (const { src, dest } of copies) {
  if (!existsSync(src)) {
    console.warn(`Ignorado (não encontrado): ${src}`);
    continue;
  }
  copyFileSync(src, dest);
  console.log(`Copiado → ${dest}`);
}
