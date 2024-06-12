
import z from "zod";

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().optional()
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogSchema = z.object({
    title: z.string(),
    content: z.string().optional(),
    id: z.string().optional()
})

export type SignupSchema = z.infer<typeof signupSchema>
export type SigninSchema = z.infer<typeof signinSchema>
export type CreateBlogSchema = z.infer<typeof createBlogSchema>
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>