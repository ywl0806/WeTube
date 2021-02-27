import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import pug from "pug";
import { localsMiddleware } from "./middlewaers";
const app = express();

//Middlewares
app.use(helmet());
app.set('view engine',"pug");
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(localsMiddleware);
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    });


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;