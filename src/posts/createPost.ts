import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client"
interface createPost {
  title: string;
  text: string;
  author: string;
}

const prisma = new PrismaClient();
export const createPost = async (app: FastifyInstance) => {
  app.post("/createpost",async (request: FastifyRequest, reply: FastifyReply) => {
    const { title, text, author } = request.body as createPost
    if (!title || !text || !author) {
      return reply.status(400).send("Informações incompletas")
    }

    const post = await prisma.post.create({
      data: {
        title,
        text,
        author
      }
    }).then((response) => {
      return reply.status(201).send({message:"Post criado com sucesso",post:response})
    }).catch((error) => {
      return reply.status(400).send("Erro ao criar post")
    })

  })
}
