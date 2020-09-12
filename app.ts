import { serve } from "https://deno.land/std@0.68.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.68.0/http/file_server.ts";
import * as flags from "https://deno.land/std@0.68.0/flags/mod.ts";

const DEFAULT_PORT = 8081;
const argPort = flags.parse(Deno.args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)) {
  console.error("Port is not a number.");
  Deno.exit(1);
}

const server = serve({ port });
console.log(`server start on :${port}/`);

async function fileExists(path: string) {
  try {
    const stats = await Deno.lstat(path);
    return stats && stats.isFile;
  } catch (e) {
    if (e && e instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw e;
    }
  }
}

const path = (p: string) => `${Deno.cwd()}/client/dist/${p}`;

for await (const req of server) {
  console.log(req.url);

  if (req.url.includes("/api/")) {
    req.respond({ body: "Home" });
    continue;
  }

  const p = path(req.url);
  if (await fileExists(p)) {
    const content = await serveFile(req, p);
    req.respond(content);
    continue;
  } else {
    const content = await serveFile(req, path("index.html"));
    req.respond(content);
    continue;
  }
}
