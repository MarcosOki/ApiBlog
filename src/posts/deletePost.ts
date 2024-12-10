import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client"

interface Paramns {
    idPost:number
}

const prisma = new PrismaClient();
export const deletePost = async (app: FastifyInstance) => {
  app.delete("/deletepost/:idPost",async (request: FastifyRequest<{Params:Paramns}>, reply: FastifyReply) => {
    const idPost = request.params.idPost
    if(idPost == Number(0)){
        await prisma.post.deleteMany({}).then((response) => {
            return reply.status(200).send("Todos os posts foram deletados com sucesso")
        }).catch((error) => {
            return reply.status(400).send("Erro ao deletar post")
        })
    }
   
    await prisma.post.delete({
        where: {
            id_post: Number(idPost)
        }
    }).then((response) => {
        return reply.status(200).send("Post deletado com sucesso")
    }).catch((error) => {
        return reply.status(400).send("Erro ao deletar post")
    })
  })
}
