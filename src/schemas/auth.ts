import { z } from "zod";

export const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export type IAuth = z.infer<typeof authSchema>
