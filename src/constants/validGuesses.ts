import { CONFIG } from "./config";

export const VALIDGUESSES = [
  "tege'g",
  "nenaq",
  "nenat",
  "geji'g",
  "nenul",
  "smtug",
  "igtig",
];

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  );
}
