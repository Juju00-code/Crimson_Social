const mongoose = require ("mongoose")
const  Schema = mongoose.Schema



const userSchema = new Schema({
    username: {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    fullname:{
        type : String,
        required : true,
        trim: true
    },
    email: {
            type : String,
            required : true,
            unique : true,
            trim : true
    },

    password: {
        type : String,
        required : true,
        minLength:[8, "please password should not be less than 7"]
    },

    /*bio: {
        type : String,
       
    },

    banner: {
        imgUrl : String ,
        publicid : String
    },

    profileImg : {
        imgUrl : String,
        publicid : String
    },

    followers : [
        {
                type : Schema.Types.ObjectId,
                ref: "User",
                default : []
        }   
],
    following:[
        {
            type : Schema.Types.ObjectId,
            ref: "User",
            default : []
        }

    ],
    bookmarks : [
        {
            type : Schema.Types.ObjectId,
            ref: "Post",
            default : []

        }
    ],

    isAdmin : {
        type:Boolean,
        default : false
    },

   role : {
    type : String,
    default : " user",
    enum : ["user","admin","Super Admin"]
   },
    subscribed : {
        type : Boolean,
        default : false
    },

    likedPost : {
        type : Schema.Types.ObjectId,
        ref :  "Post",
        default : []
    }*/

},{timeseries:true, timestamps:true})

const User = mongoose.model("User", userSchema)
module.exports = User