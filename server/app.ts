import Koa from "koa"
import Router from "koa-router"
import cors from "koa-cors"
import bodyParser from "koa-bodyparser"

const app: Koa = new Koa()
const router: Router = new Router()
const PORT: string | number = process.env.PORT || 5000

router.get("/", async (ctx, next: Koa.Next) => {
  ctx.body = "Hello"
  await next()
})

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.listen(PORT, () => {
  console.log("Listening at http://localhost:5000\n")
})
