import fastify from 'fastify'

const app = fastify()

app
  .listen({
    port: 3333,
  })
  .then((server) =>
    console.log(`⭐️ http server running on http://localhost:${server}`),
  )
