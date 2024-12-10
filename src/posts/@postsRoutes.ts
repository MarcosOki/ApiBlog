import { FastifyInstance } from "fastify";
import { app } from "../server";
import { createPost } from "./createPost";
import { getPosts } from "./getPosts";
import { deletePost } from "./deletePost";

export const postsRoutes = async (app : FastifyInstance) => {
    app.register(createPost)
    app.register(getPosts)
    app.register(deletePost)
}