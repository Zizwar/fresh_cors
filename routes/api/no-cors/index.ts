import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, _ctx) {
    console.log("no-cors GET");
    return new Response(JSON.stringify({
      "text": "You should not see this via a CORS request.",
    }));
  },
};
