// We register our function to be called on "fetch" events.
addEventListener("fetch", (event: FetchEvent) => {
  // The FetchEvent has a property named `request` which holds
  // the details of the incoming request and is of type
  // `Request` of the Fetch API.
  const method = event.request.method;

  // We call the `respondWith` method to respond to the request.
  // The argument should either be a `Response` or a promise that
  // resolves to a Response.
  event.respondWith(new Response(`Hello. You made a ${method} request.`));
});
