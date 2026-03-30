import { promises as fs } from "node:fs";
import path from "node:path";

export type PurchaseRecord = {
  sessionId: string;
  paymentIntentId: string;
  productSlug: string;
  email: string;
  amountTotal: number;
  currency: string;
  purchasedAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const purchaseFilePath = path.join(dataDir, "purchases.json");

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(purchaseFilePath);
  } catch {
    await fs.writeFile(purchaseFilePath, "[]\n", "utf-8");
  }
}

export async function readPurchases(): Promise<PurchaseRecord[]> {
  await ensureStore();
  try {
    const raw = await fs.readFile(purchaseFilePath, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as PurchaseRecord[]) : [];
  } catch {
    return [];
  }
}

export async function upsertPurchase(record: PurchaseRecord) {
  const purchases = await readPurchases();
  const next = purchases.filter((item) => item.sessionId !== record.sessionId);
  next.push(record);
  await fs.writeFile(purchaseFilePath, JSON.stringify(next, null, 2) + "\n", "utf-8");
}
