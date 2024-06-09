import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export async function authMiddleware(c : Context ,next : Next){
    
        const jwt = c.req.header('Authorization') || "";
          if (!jwt){
              c.status(401);
              return c.json({error:"unauthorized"})
          }
          try {
            const token = jwt.split(" ")[1];
            const user = await verify(token, c.env.JWT_SECRET);
            if (!user){
              c.status(401);
              return c.json({error:"Unauthorized user"});
            }
            
            c.set('userId', user.id);
            await next();
          }catch(e){
            return c.json({error:"invalid token"})
          }
   
}