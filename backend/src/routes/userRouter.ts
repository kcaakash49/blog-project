import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt";
import { signinSchema, signupSchema } from "@kcaakash/common-blogapp";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post("/signup",async (c) => {
    console.log("I am here")
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const body = await c.req.json();
      const { success } = signupSchema.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({
          message: "Input invalid"
        })
      }
  
      try {
        const user = await prisma.user.create({
          data: {
            email: body.email,
            password: body.password,
            name: body.name
          },
        });
        const jwt = await sign({id: user.id},c.env?.JWT_SECRET);
        return c.json({jwt,name:user.name})
      } catch (e) {
        c.status(403);
        return c.json({error: "error while signing up"})
      }
   
})

userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const body = await c.req.json();
      const { success } = signinSchema.safeParse(body);
      if(!success){
        c.status(400);
        return c.json({
          
          message:"invalid credentials"
        })
      }
  
      try {
        const user = await prisma.user.findUnique({
          where:{
            email: body.email,
            password: body.password
    
          }
        });
        
        if(!user){
          return c.json({error:"Wrong username or password"})
        }
        const jwt = await sign({id: user.id}, c.env?.JWT_SECRET);
        return c.json({jwt,name:user.name})
      }catch(e){
        c.status(403);
        return c.json({error: "error while logging in"})
      }
    
})

userRouter.get("/", async (c) =>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const post = await prisma.user.findMany({})
    return c.json(post)
  }catch(e){
    return c.json({
      error: "cannot find users"
    })
  }
})