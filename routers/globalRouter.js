import express from "express";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controller/userController";
import { home, search } from "../controller/videoController";
import routes from "../routes";
import { onlyPublic } from "../middlewaers";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
