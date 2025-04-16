import { CONFIG } from "./config";

export const ORTHOGRAPHY = [
  "a",
  "a'",
  "e",
  "e'",
  "i",
  "i'",
  "o",
  "o'",
  "u",
  "u'",
  "q",
  "w",
  "t",
  "p",
  "s",
  "g",
  "j",
  "l",
  "n",
  "m",
  "'",
];

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  );
}
