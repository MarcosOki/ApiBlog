import { FastifyInstance } from "fastify";
import { app } from "../server";
import { createPost } from "./createPost";
import { getPosts } from "./getPosts";

export const postsRoutes = async (app : FastifyInstance) => {
    app.register(createPost)
    app.register(getPosts)
}