const mongoose = require("mongoose")
const  Schema = mongoose.Schema


const postSchema = new Schema ({
    user :{
        type : String
    },
    likes :{
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    postImg: {
        imgUrl: String,
        publicId : String,
    },
    comments : [ { type : Schema.Types.ObjectId,  ref: "User",default:[]}]
},{timestamps:true})

const Post = mongoose.model("Post", postSchema)
module.exports = Post