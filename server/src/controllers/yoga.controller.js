const { introModel, aboutModel, storyModel, techniqueModel, experienceModel, nutritionModel, blogModel } =require("../models/yoga.model")


async function getAllData(req,res){
    try {
        const intros=await introModel.find();
        const abouts=await aboutModel.find();
        const stories=await storyModel.find();
        const techniques=await techniqueModel.find();
        const experiences=await experienceModel.find();
        const nutritions=await nutritionModel.find(); 
        const blogs=await blogModel.find();

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

module.exports={
    getAllData
}