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

app.listen({ host: "0.0.0.0", port: process.env.PORT ? Number(process.env.PORT): 3333}, (err,adress)=> {
  console.log(`HTTP server `, adress);
});
