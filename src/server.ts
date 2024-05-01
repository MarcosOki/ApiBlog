import fastify from "fastify";
const app = fastify();
import { number, z } from "zod";
import { createPostSchema } from "./Schemas/createPostSchema";
import { PrismaClient } from "@prisma/client";
import {fastifyCors} from "@fastify/cors"
import { deletePostScheme } from "./Schemas/deletePostScheme";
import { stringify } from "querystring";

app.register(fastifyCors,{
  origin:"*",
  methods:['GET','POST','PUT', 'DELETE']
})


const prisma = new PrismaClient();

interface requestBody {
  title: string;
  text: string;
  author: string;
}
interface Parametros{
  page?:any
}



app.listen({ host:"0.0.0.0",port: process.env.PORT ? Number(process.env.PORT) : 3333 }, () => {
  console.log(`HTTP server runing`);
});
