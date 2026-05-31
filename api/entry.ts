import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const serverModulePromise = import(
  pathToFileURL(join(process.cwd(), "dist/server/index.mjs")).href,
);

function createRequest(req: VercelRequest): Request {
  const url = new URL(req.url ?? "", `http://${req.headers.host ?? "localhost"}`);
  return new Request(url.toString(), {
    method: req.method,
    headers: req.headers as HeadersInit,
    body:
      req.method === "GET" || req.method === "HEAD"
        ? undefined
        : (req as unknown as BodyInit),
  });
}

async function sendResponse(res: VercelResponse, response: Response) {
  if (typeof (res as any).status === "function") {
    (res as any).status(response.status);
  } else {
    res.statusCode = response.status;
  }

  response.headers.forEach((value, name) => {
    res.setHeader(name, value);
  });

  if (response.body === null) {
    res.end();
    return;
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const serverModule = await serverModulePromise;
  const entry = serverModule.default ?? serverModule;

  if (!entry || typeof entry.fetch !== "function") {
    if (typeof (res as any).status === "function" && typeof (res as any).send === "function") {
      (res as any).status(500).send("Server entry is not available");
    } else {
      res.statusCode = 500;
      res.end("Server entry is not available");
    }
    return;
  }

  const request = createRequest(req);
  const fetchFn = (entry as { fetch?: (request: Request) => Promise<Response> })
    .fetch;
  if (!fetchFn) {
    if (typeof (res as any).status === "function" && typeof (res as any).send === "function") {
      (res as any).status(500).send("Server entry is not available");
    } else {
      res.statusCode = 500;
      res.end("Server entry is not available");
    }
    return;
  }

  const response = await fetchFn(request);
  await sendResponse(res, response);
}
