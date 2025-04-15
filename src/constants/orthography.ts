import { CONFIG } from "./config";

export const ORTHOGRAPHY = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "a'",
  "e'",
  "i'",
  "o'",
  "u'",
  "g",
  "j",
  "l",
  "m",
  "n",
  "p",
  "q",
  "s",
  "t",
  "w",
  "'",
];

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  );
}
