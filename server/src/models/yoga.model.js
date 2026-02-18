const mongoose = require("mongoose")

const introSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    thought1: {
        type: String,
        required: true
    },
    thought2: {
        type: String,
        required: true
    }
})  

const aboutSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    para: {
        type: String,
        required: true
    },
    achievement: {
        type: Array,
        required: true
    }
})

const storySchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    challenge: {
        type: String,
        required: true
    },
    transformation: {
        type: String,
        required: true
    }
})

const techniqueSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true
    },
    para: {
        type: String,
        required: true
    }
})

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


const nutritionSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    paragraph:{
        type:String,
        required:true
    }
})

const blogSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    heading:{
        type:String,
        required:true
    },
    paragraph:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
    
    
})

const introModel=mongoose.model("intro",introSchema)
const aboutModel=mongoose.model("about",aboutSchema)
const storyModel=mongoose.model("story",storySchema)
const techniqueModel=mongoose.model("technique",techniqueSchema)
const experienceModel=mongoose.model("experience",experienceSchema)
const nutritionModel=mongoose.model("nutrition",nutritionSchema)
const blogModel=mongoose.model("blog",blogSchema)


module.exports={
    introModel,aboutModel,storyModel,techniqueModel,experienceModel,nutritionModel,blogModel
}

