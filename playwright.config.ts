import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "feature/*.feature",
  steps: "steps/**/*.ts",
  // ...other playwright-bdd options
});

export default defineConfig({
  testDir,
});
