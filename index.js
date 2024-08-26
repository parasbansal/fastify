import Fastify from "fastify";

import testRoute from "./routes/test.js";

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.register(testRoute);

// Run the server!
fastify.listen({ port: 8082 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
  console.log(`Server is now listening on ${address}`);
});
