const mongoose = require ('mongoose')

const notificationSchema = new mongoose.Schema({
    to : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",

        required : true
    },
    read : {
        type:  mongoose.Schema.Types.ObjectId,
        ref : "User" 
    },

    notificationType : {
        type : String,
        enum : ["follow", "like","comment"]
    }
})

const Notification = mongoose.model("Notification", notificationSchema)

module.exports  = Notification