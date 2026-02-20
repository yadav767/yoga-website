const { introModel, aboutModel, storyModel, techniqueModel, experienceModel, nutritionModel, blogModel } = require("../models/yoga.model")
const { v4: uuidv4 } = require('uuid');
const uploadFile = require("../services/storage.service")


//Get All data 
async function getAllData(req, res) {
    try {
        const intros = await introModel.find();
        const abouts = await aboutModel.find();
        const stories = await storyModel.find();
        const techniques = await techniqueModel.find();
        const experiences = await experienceModel.find();
        const nutritions = await nutritionModel.find();
        const blogs = await blogModel.find();

        res.status(200).json({
            intros,
            abouts,
            stories,
            techniques,
            experiences,
            nutritions,
            blogs
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Update Intro controller
async function updateIntroController(req, res) {
    const { thought1, thought2, _id } = req.body
    const image = req.file

    try {
        let url = null
        let updatedIntro = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            updatedIntro = await introModel.findOneAndUpdate({ _id: _id }, {
                url, thought1, thought2
            }, { returnDocument: "after" })
        } else {
            updatedIntro = await introModel.findOneAndUpdate({ _id: _id }, {
                thought1, thought2
            }, { returnDocument: "after" })
        }


        res.status(200).send({
            data: updatedIntro,
            success: true,
            message: "Intro Updated successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


//Update About controller
async function updateAboutController(req, res) {
    const { para, _id } = req.body
    const achievement = typeof req.body.achievement === "string"
        ? JSON.parse(req.body.achievement)
        : req.body.achievement
    const image = req.file

    try {
        let url = null
        let updatedIntro = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            updatedIntro = await aboutModel.findOneAndUpdate({ _id: _id }, {
                para, achievement, url
            }, { returnDocument: "after" })
        } else {
            updatedIntro = await aboutModel.findOneAndUpdate({ _id: _id }, {
                para, achievement
            }, { returnDocument: "after" })
        }


        res.status(200).send({
            data: updatedIntro,
            success: true,
            message: "About Updated successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Update story controller
async function updateStoryController(req, res) {
    const { challenge, transformation, _id } = req.body
    const image = req.file

    try {
        let url = null
        let updatedStory = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            updatedStory = await storyModel.findOneAndUpdate({ _id: _id }, {
                url, challenge, transformation
            }, { returnDocument: "after" })
        } else {
            updatedStory = await storyModel.findOneAndUpdate({ _id: _id }, {
                challenge, transformation
            }, { returnDocument: "after" })
        }
        res.status(200).send({
            data: updatedStory,
            success: true,
            message: "Story Updated successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Update Technique controller
async function updateTechniqueController(req, res) {
    const { heading, para, _id } = req.body
    const image = req.file
    try {
        let url = null
        let updatedTechnique = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            updatedTechnique = await techniqueModel.findOneAndUpdate({ _id: _id }, {
                image: url, heading, para
            }, { returnDocument: "after" })
        } else {
            updatedTechnique = await techniqueModel.findOneAndUpdate({ _id: _id }, {
                heading, para
            }, { returnDocument: "after" })
        }
        res.status(200).send({
            data: updatedTechnique,
            success: true,
            message: "Technique Updated successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Update nutrition controller
async function updateNutritionController(req, res) {
    const { heading, paragraph, _id } = req.body
    try {
        const updateNutrition = await nutritionModel.findOneAndUpdate({ _id: _id }, {
            heading, paragraph
        }, { returnDocument: "after" })

        res.status(200).send({
            data: updateNutrition,
            success: true,
            message: "Nutrition Updated successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Update Blog
async function updatedBlogController(req, res) {
    const { heading, paragraph, details, _id } = req.body
    const image = req.file
    try {
        let url = null
        let updtedBlog = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            updtedBlog = await blogModel.findOneAndUpdate({ _id: _id }, {
                url, heading, paragraph, details
            }, { returnDocument: "after" })
        } else {
            updtedBlog = await blogModel.findOneAndUpdate({ _id: _id }, {
                heading, paragraph, details
            }, { returnDocument: "after" })
        }
        res.status(200).send({
            data: updtedBlog,
            success: true,
            message: "Technique Updated successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//create blog controller
async function createBlogController(req, res) {
    const { heading, paragraph, details } = req.body
    const image = req.file

    try {
        let url = null
        let Blog = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            Blog = await blogModel.create({
                url, heading, paragraph, details
            })
        } else {
            Blog = await blogModel.findOneAndUpdate({
                heading, paragraph, details, url
            })
        }
        res.status(200).send({
            data: Blog,
            success: true,
            message: "Blog created successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
//Delete Blog controller
async function deleteBlogController(req, res) {
    const { _id } = req.body
    try {
        await blogModel.findOneAndDelete({ _id })
        res.status(200).send({
            success: true,
            message: "Blog deleted successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//create experience controller
async function createExperienceController(req, res) {
    const { title, period, description } = req.body
    try {
        const experience = await experienceModel.create({
            title, period, description
        })
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience created  successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//update experience controller
async function updateExperienceController(req, res) {
    const { title, period, description, _id } = req.body
    try {
        const experience = await experienceModel.findOneAndUpdate({ _id: _id }, {
            title, period, description
        })
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated  successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

//Delete experience controller
async function deleteExperienceController(req, res) {
    const { _id } = req.body
    try {
        await experienceModel.findOneAndDelete({ _id })
        res.status(200).send({
            success: true,
            message: "Experience deleted successfully !"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    getAllData,
    updateIntroController,
    updateAboutController,
    updateStoryController,
    updateTechniqueController,
    updateNutritionController,
    updatedBlogController,
    deleteBlogController,
    createBlogController,
    createExperienceController,
    updateExperienceController,
    deleteExperienceController
}