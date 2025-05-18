/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextApiRequest, NextApiResponse } from "next";
import { match } from "path-to-regexp";

export function getPresentation(
  routes: Record<
    string,
    (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  >,
  req: NextApiRequest
): ((req: NextApiRequest, res: NextApiResponse) => Promise<void>) | null {
  const path = `${req.method}${req.url}`.split("?")[0];

  for (const route in routes) {
    const matchRoute = match(removeTrailingSlash(route), {
      decode: decodeURIComponent,
    });
    const result = matchRoute(removeTrailingSlash(path));

    delete req.query["slug"];
    req.query = {
      ...req.query,
      // @ts-ignore
      ...(result.params || {}),
    };

    if (result) {
      return routes[route];
    }
  }

  return null;
}

const removeTrailingSlash = (path: string) => {
  if (path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
};
