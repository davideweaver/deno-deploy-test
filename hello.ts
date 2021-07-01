import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";

addEventListener("fetch", (event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
