import routes from "../routes";
import Video from "../models/Video"

export const home = async(req,res) => { //async : 작업이 끝날때 까지 기다림
    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle : "Home", videos});
    } catch (error) {
        console.log(error);
        res.render("home", {pageTitle: "Home", videos:[] });
    }
};
export const search =(req,res) => {
    const {
        query: {term: searchingBy}
    } = req;
    res.render("search", {pageTitle : "Search", searchingBy, videos});
};

export const getUpload = (req,res) => {
    res.render("upload", {pageTitle : "Upload"});
};
export const postUpload = async(req,res) => {
    const {
        body: { title, description},
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
        })
    console.log(newVideo);
    // 할일 : 비디오 업로드 및 저장
    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req,res) => {
    const {
        params: {id}
    } = req;
    const video = await Video.findById(id);
    console.log(req);
    res.render("videoDetail", {pageTitle : "Video Detail"});
};
export const editVideo = (req,res) => res.render("editVideo", {pageTitle : "Edit Video"});

export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle : "Delete Video"});