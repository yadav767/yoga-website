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
        trim: true,
        match: [/^[6-9]\d{9}$/, "Please enter a valid phone number"]
    },
    plan: {
        type: String,
        enum: [
            "Personal 1-on-1 Sessions",
            "Group Classes",
            "Corporate Wellness Programs",
        ],
        default: "Corporate Wellness Programs",
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const formModel = mongoose.model("user-form", formSchema)

module.exports = formModel