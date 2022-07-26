import { welcome } from "./deps/a.ts";
import { config } from "https://deno.land/std/dotenv/mod.ts";

export const mom = welcome("mom!");

export const setupToken = async () => {
  // Do some expensive/shared setup that can be used by other consumers
  console.log(await config());
};

export default setupToken();
