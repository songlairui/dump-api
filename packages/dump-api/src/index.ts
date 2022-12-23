import Koa from "koa";
import koaBody from "koa-body";

const app = new Koa();

app.use(koaBody());

app.use(async (ctx, next) => {
  await next();
  const { method, url, body } = ctx.request;
  console.info(method, url, body);
  ctx.status = 200;
  ctx.body = {
    msg: "hi dump",
    method,
    url,
    body,
  };
});

const PORT = 3456;
app.listen(PORT, () => {
  console.info(`listening at http://localhost:${PORT}`);
});
