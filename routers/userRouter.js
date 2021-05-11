import express from "express";
import {
  getChangePassword,
  getEditProfile,
  postEditProfile,
  userDetail,
} from "../controller/userController";
import { onlyPrivate, uploadAvatar } from "../middlewaers";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
