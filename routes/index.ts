import * as Koa from "koa";
import * as Mongoose from "mongoose";
import {POI} from "../schemas/POI";
import * as Router from "koa-router";

const bodyParser = require("koa-bodyparser");
const jsonParser = require('koa-json');

const uri = "mongodb+srv://Yoav:!Q2w3e4r@yoavcluster-6ixmq.mongodb.net/test?retryWrites=true";

Mongoose.connect(uri).then(() => {
    console.log("connected");
});

const server = new Koa();
const router = new Router();

router.post("/poi/create", async (ctx) => {
    const body = (ctx.request as any).body;
    if (!body.geo || !body.name || !body.type) {
        ctx.throw(400);
    } else {
        const toAdd = new POI({
            name: body.name,
            geo: body.geo,
            type: body.type
        });
        const poi = await toAdd.save();

        ctx.body = poi;
    }
});

router.put("/poi/:id/put", async (ctx) => {
    const body = (ctx.request as any).body;
    if (!body.geo || !body.name || !body.type) {
        ctx.throw(400);
    }
    const id = ctx.params.id;
    const updated = await POI.findByIdAndUpdate(id, {geo: body.geo, name: body.name, type: body.type});
    ctx.body = updated;
});

router.post("/poi/find_in_area", async (ctx) => {
    const body = (ctx.request as any).body;
    if (!body.bottomLeft || !body.upperRight) {
        ctx.throw(400);
    }
    const query = POI.find({
        "geo": {
            "$geoWithin": {
                $box: [
                    body.bottomLeft,
                    body.upperRight
                ]
            }
        }
    });
    const result = await query.exec();

    ctx.body = result;
});

server.use(jsonParser());
server.use(bodyParser());
server.use(router.routes());

server.listen(3000);

module.exports = server;
