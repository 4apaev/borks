"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const koa_1 = require("koa");
const routers_1 = require("./routers");
// const { PORT, log } = require('./config')
// const Koa = require('koa')
// const router = require('./routers')
const app = new koa_1.default();
app.use(async (ctx, next) => {
    const start = new Date;
    try {
        await next();
    }
    catch (e) {
        const { status = 500, message } = e;
        ctx.status = status;
        ctx.body = { ok: false, message };
        ctx.app.emit('error', e, ctx);
    }
    finally {
        config_1.log(ctx.status, ctx.method, ctx.path, new Date - start);
    }
});
app.use(routers_1.default.routes());
app.on('error', (e, ctx) => {
    config_1.log('\n\n==== FAIL ====');
    config_1.log(e);
    config_1.log('\n\n');
});
exports.app = app;
exports.server = app.listen(config_1.PORT, () => {
    config_1.log('listening on localhost:' + config_1.PORT);
});
//# sourceMappingURL=main.js.map