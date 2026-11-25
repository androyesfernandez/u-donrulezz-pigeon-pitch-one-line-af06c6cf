import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a one-line elevator pitch a city pigeon gives investors for
// its startup, CooPay. 160 characters, one line, no trailing newline.
// The joke lands on the pigeon being the whole company at once: founder,
// workforce, and sole shareholder — while the investors pay real cash and
// the pigeons pay in breadcrumbs.
const LINE =
  "CooPay turns every statue into a subscription perch — pigeons pay rent in breadcrumbs, investors pay cash, and I'm the CEO, the fleet, and the only shareholder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
