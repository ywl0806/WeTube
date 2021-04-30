import express from "express";
import passport from "passport";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
  githubLogin,
  postGithubLogin,
} from "../controller/userController";
import { home, search } from "../controller/videoController";
import routes from "../routes";
import { onlyPrivate, onlyPublic } from "../middlewaers";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);
export default globalRouter;
