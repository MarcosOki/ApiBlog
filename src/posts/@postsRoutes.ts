import { FastifyInstance } from "fastify";
import { app } from "../server";
import { createPost } from "./createPost";

export const postsRoutes = async (app : FastifyInstance) => {
    app.register(createPost)
}