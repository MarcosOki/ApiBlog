import { FastifyInstance } from "fastify";
import { app } from "./server";
import { postsRoutes } from "./posts/@postsRoutes";

export const routes = async (app : FastifyInstance) => {
    app.register(postsRoutes)
} 