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
        body: { title: title, description: description},
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
        params: {id: id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle : "Video Detail", video});
    } catch(error){
        console.log(error);
        res.redirect(routes.home);
    };
};
export const getEditVideo = async(req,res) => {
    const {
        params: {id}
    }= req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle : `Edit ${video.title} Video`,video});
    } catch (error) {
        console.log(error);
        res.redirect(routes.videoDetail(id));
    }
    
};
export const postEditVideo = async(req,res) => {
    const {
        body:{ title, description},
        params: {id}
    } = req;
    try {
        await Video.findOneAndUpdate(id,{title,description})
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.videoDetail(id));
    }
   
};

export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle : "Delete Video"});