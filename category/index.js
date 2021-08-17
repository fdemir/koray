const fastify = require("fastify")();

fastify.get("/", (request, reply) => {
  return {
    name: "category",
  };
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
