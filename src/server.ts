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


app.post("/createpost", async (request, reply) => {
  try {
    const data = request.body;
    createPostSchema.parse(data);
    const { title, text, author } = data as requestBody;
    try {
      const post = await prisma.post.create({
        data: {
          title: title,
          text: text,
          author: author,
        },
      });
      reply.status(201).send(post);
    } catch (error) {
      reply.send(error)
    }
  } catch (error) 
  {
    console.error(error);
  }
});

app.delete("/deletepost", async(request,response)=>{
  const objData = deletePostScheme.parse(request.body)
  const deletPost = prisma.post.delete({
    where:{id:objData.id}
  })
})

app.get("/page/:page", async ( request,reply)=>{
  const {page} = request.params as Parametros
  try{

    const totalCount = await prisma.post.count()
    const totalPages = Math.ceil(totalCount/5)

    const pageNumber = parseInt(page)
    const limit = 5
    const offset = (pageNumber-1)*5

    const post = await prisma.post.findMany({
      skip:offset,
      take:limit
    })

    const response = {
      posts:post,
      totalPages:totalPages,
      totalPosts:totalCount
    }
    reply.send(response)

  }catch(error){
    console.log(error)
  }
})



app.listen({ host:"0.0.0.0",port: process.env.PORT ? Number(process.env.PORT) : 3333 }, () => {
  console.log(`HTTP server runing`);
});
