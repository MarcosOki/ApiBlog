import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";
interface Paramns{
    page: string
}
const prisma = new PrismaClient();

export const getPosts = async (app : FastifyInstance) => {
    app.get("/getposts/:page", async (request: FastifyRequest, reply: FastifyReply) => {
        const {page} = request.params as Paramns
        const posts = (await prisma.post.findMany()).reverse()
        const limit = 5
        const totalPages = Math.ceil(posts.length / limit)
        const data = posts.slice((Number(page) - 1) * limit, Number(page) * limit)
        return reply.status(200).send({data, totalPages})
    })
}