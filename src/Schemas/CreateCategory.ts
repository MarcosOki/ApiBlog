import { z } from "zod";

export const createCategory = z.object({
    name: z.string()
})