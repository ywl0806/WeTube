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
  facebookLogin,
  postFacebookLogin,
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

//github Login
globalRouter.get(routes.github, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

//facebook Login
globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);
export default globalRouter;
