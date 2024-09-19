const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        require:true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
        default: []  // Initialize likes as an empty array
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: []  // Initialize comments as an empty array
    }]
})



module.exports=mongoose.model("Post",postSchema)