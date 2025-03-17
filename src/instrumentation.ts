console.log(3);
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("reflect-metadata");
    // TODO: Add container dependencies here
  }
}
