import fastify from "fastify";
import {fastifyCors} from "@fastify/cors"
import { routes } from "./routes";

export const app = fastify();

app.register(fastifyCors,{
  origin:"*",
  methods:['GET','POST','PUT', 'DELETE']
})
app.get("/", async () => {
  return { hello: "world" };
})
app.register(routes);

app.listen({ port: 3000}, ()=> {
  console.log(`HTTP server `);
});
