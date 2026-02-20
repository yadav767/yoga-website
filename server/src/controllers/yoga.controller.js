const { introModel, aboutModel, storyModel, techniqueModel, experienceModel, nutritionModel, blogModel } = require("../models/yoga.model")
const { v4: uuidv4 } = require('uuid');
const uploadFile = require("../services/storage.service")

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


async function updateIntroController(req, res) {
    const { thought1, thought2, _id } = req.body
    const image = req.file

    try {
        let url = null
        let updatedIntro = null
        if (image) {
            const response = await uploadFile(image.buffer, uuidv4())
            url = response.url
            console.log(url);
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

module.exports = {
    getAllData, updateIntroController, updateAboutController
}