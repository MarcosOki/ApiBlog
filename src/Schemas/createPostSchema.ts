import { z } from "zod";

export const createPostSchema = z.object({
    title :z.string(),
    text :z.string(),
    author :z.string()
})