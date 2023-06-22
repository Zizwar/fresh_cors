import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  HEAD(_req, _ctx) {
    console.log("simple-cors HEAD");
    return new Response(null, {
      status: 204,
    });
  },
  GET(_req, _ctx) {
    console.log("simple-cors GET");
    return new Response(JSON.stringify({
      "text": "Simple CORS requests are working. [GET]",
    }));
  },
  POST(_req, _ctx) {
    console.log("simple-cors POST");
    return new Response(JSON.stringify({
      "text": "Simple CORS requests are working. [POST]",
    }));
  },
};
