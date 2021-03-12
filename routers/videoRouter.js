import express from "express";
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail } from "../controller/videoController";
import { uploadVideo } from "../middlewaers";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload)

videoRouter.get(routes.videoDetail(),videoDetail);

videoRouter.get(routes.editVideo(),getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);

videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;