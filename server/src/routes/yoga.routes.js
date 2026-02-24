const express = require("express")
const multer = require("multer")
const { getAllData, updateIntroController, updateAboutController, updateStoryController, updateTechniqueController, updateNutritionController, updatedBlogController, createBlogController, deleteBlogController, createExperienceController, updateExperienceController, deleteExperienceController, updatePriceController, updateFormStatusController, deleteFormController } = require("../controllers/yoga.controller")

const   router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })


//Get all data
router.get("/get-all-data", getAllData)

//Update intro
router.post("/update-intro", upload.single("image"), updateIntroController)

//update about
router.post("/update-about", upload.single("image"), updateAboutController)

//Update Story
router.post("/update-story", upload.single("image"), updateStoryController)

//update Technique
router.post("/update-technique", upload.single("image"), updateTechniqueController)

//Update Nutrition
router.post("/update-nutrition", updateNutritionController)

//Update Blog
router.post("/update-blog", upload.single("image"), updatedBlogController)


//Create Blog
router.post("/add-blog", upload.single("image"), createBlogController)

//Delete Blog
router.post("/delete-blog", deleteBlogController)

//create experience
router.post("/add-experience",upload.single("image"),createExperienceController)

//update experience
router.post("/update-experience",upload.single("image"),updateExperienceController)

//Delete experience
router.post("/delete-experience",deleteExperienceController)

//update price
router.post("/update-price",updatePriceController)


//update form status
router.post("/mark-done",updateFormStatusController)

//delete form
router.post("/delete-user",deleteFormController)

module.exports = router