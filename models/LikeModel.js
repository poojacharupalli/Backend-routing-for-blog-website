const mongoose=require("mongoose")

const LikeSchema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Like",LikeSchema)