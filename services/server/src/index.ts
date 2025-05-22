import { Elysia } from "elysia"
import { node } from "@elysiajs/node"

const app = new Elysia({ adapter: node() })

app.get('/', () => 'Hello Elysia')

app.listen(8080, ({ hostname, port }) => {
  console.log(`🦊 Elysia is running at ${hostname}:${port}`)
})