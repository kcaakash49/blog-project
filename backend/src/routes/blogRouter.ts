import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { authMiddleware } from "../middlewares/authmiddleware";
import { createBlogSchema, updateBlogSchema } from "@kcaakash/common-blogapp";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
  Variables: {
    prisma: any;
    userId: string;
  }
}>();

blogRouter.use(authMiddleware);

blogRouter.use('*', async (c, next) => {
  if (!c.get('prisma')) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    c.set('prisma', prisma);
  }
  await next();
});

blogRouter.get("/", async (c) => {
  const prisma = c.get('prisma');

  try {
    const posts = await prisma.post.findMany({});
    return c.json(posts);
  } catch (e) {
    console.error(e);  // Log the error for debugging
    return c.json({ message: "Something went wrong" }, 500);
  }
});

blogRouter.post("/", async (c) => {
  const prisma = c.get('prisma');
  const body = await c.req.json();
  const userId = c.get('userId');
  const { success } = createBlogSchema.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message: "Inputs not correct"
  })
  }

  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    });
    return c.json({ id: post.id });
  } catch (e) {
    console.error(e);  // Log the error for debugging
    return c.json({ error: "Error while uploading post" }, 500);
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = c.get('prisma');

  try {
    const post = await prisma.post.findUnique({
      where: { id: id},
    });

    if (!post) {
      return c.json({ error: "Post not found" }, 404);
    }

    return c.json(post);
  } catch (e) {
    console.error(e);  // Log the error for debugging
    return c.json({ error: "Could not load post" }, 500);
  }
});

blogRouter.put("/", async (c) => {
  const prisma = c.get('prisma');
  const userId = c.get('userId');
  const body = await c.req.json();
  const { success } = updateBlogSchema.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message: "Inputs not correct"
  })
  }

  try {
    await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({ message: "Update Successful" });
  } catch (e) {
    console.error(e);  // Log the error for debugging
    return c.json({ error: "Update unsuccessful" }, 500);
  }
});
