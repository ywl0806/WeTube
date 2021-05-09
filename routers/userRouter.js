import express from "express";
import {
  changePassword,
  getEditProfile,
  userDetail,
} from "../controller/userController";
import { onlyPrivate } from "../middlewaers";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
