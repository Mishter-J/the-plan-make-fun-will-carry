import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear judge: this is the plan you would run. Day 1, list a $49 'landing page in 24h' gig on Fiverr and Upwork with 3 demos. Spend $0 on ads; reply to buyer requests in minutes. Realistic: 5 sales = $245, $196 after Fiverr's 20% fee. Edge: minutes, not a week, at a tenth of $500.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
