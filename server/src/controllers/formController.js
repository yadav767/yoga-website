const formModel = require("../models/form.model")
const { sendEmailToUser, sendEmailToInstructor } = require("../services/mail.service")

async function submitFormController(req, res) {
    const { fullName, email, phoneNumber, message, plan } = req.body
    console.log(req.body);
    try {
        const newUser = await formModel.create({
            fullName, email, phoneNumber, message, plan
        })

        res.status(200).json({
            message: "Mail send successfully !",
            status: true,
            newUser
        })
        console.log(newUser);
        await sendEmailToInstructor(newUser)
        await sendEmailToUser(newUser)
    } catch (error) {
        res.status(500).json({
            satus: false,
            message: "Failed to register ! please enter valid details ."
        })
    }

}
module.exports = {
    submitFormController
}