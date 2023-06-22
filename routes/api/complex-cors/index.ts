import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  OPTIONS(_req, _ctx) {
    // note this isn't hit because the middleware intercepts the req first
    console.log("complex-cors OPTIONS");
    return new Response();
  },
  DELETE(_req, _ctx) {
    console.log("complex-cors DELETE");
    return new Response(JSON.stringify({
      "text": "Complex CORS requests are working. [DELETE]",
    }));
  },
};
