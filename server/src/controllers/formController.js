const formModel = require("../models/form.model")
const {sendEmailToUser,sendEmailToInstructor} = require("../services/mail.service")

async function submitFormController(req, res) {
    const { fullName, email, phoneNumber, plan, message } = req.body
    try {
        const newUser = await formModel.create({
            fullName, email, phoneNumber, plan, message
        })
        
        res.json({
            message:"Mail send successfully !",
            newUser
        })
        await sendEmailToInstructor(newUser)
        await sendEmailToUser(newUser)
    } catch (error) {
        console.log(error);
    }

}
module.exports={
    submitFormController
}