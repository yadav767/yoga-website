const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required !"],
        trim: true,
        minlength: 3,
        maxlength: 50,
        match: [/^[a-zA-Z ]+$/, "Name must contains only letter !"]
    },
    email: {
        type: String,
        required: [true, "Please provide email address !"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please use a valid email address"
        ]
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required !"],
        unique: true,
        trim: true,
        // match: [/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number"]
    },
    plan: {
        type: String,
        enum: [
            "personal",
            "group",
            "corporate",
            "consultation"
        ],
        default:"consultation",
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const formModel=mongoose.model("user-form",formSchema)

module.exports=formModel