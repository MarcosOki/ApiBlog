import {z} from "zod"

export const deletePostScheme = z.object({
  id : z.number()
})