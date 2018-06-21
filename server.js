const Koa = require('koa');
const server = new Koa();
const Router = require('koa-router');

const router = new Router();

router.get("/hello_world", (ctx, next) => {
    ctx.body = 'Hello World';
});

server.use(router.routes());

server.listen(3000);

module.exports = server;
