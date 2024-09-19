const express=require("express")

const router=express.Router()

const {createComment}=require("../controllers/CommentController")
const {createPost}=require("../controllers/PostController")
const {getAllPost}=require("../controllers/PostController")
const {likePost,unlikePost}=require("../controllers/LikeController")








router.post("/comments/create",createComment)
router.post("/post/create",createPost)
router.get("/posts",getAllPost)
router.post("/likes/like",likePost)
router.post("/likes/unLike",unlikePost)

module.exports=router;