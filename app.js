import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
const app = express();

//Middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use("/user",userRouter);
app.use("/vidio", videoRouter);

export default app;