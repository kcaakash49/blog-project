import { Hono } from "hono";
import { authMiddleware } from "../middlewares/authmiddleware";


export const blogRouter = new Hono();
   
blogRouter.use(authMiddleware);
blogRouter.get("/",(c) => {
    return c.text("Get all blogs")
})

blogRouter.post("/",(c) => {
    return c.text("Post Blogs")
})

blogRouter.put("/:id",(c) =>{
    return c.text("update blogs")
})
