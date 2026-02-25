const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.APP_PASSWORD
    }
});

// Verify the connection configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Error connecting to email server:', error);
    } else {
        console.log('Email server is ready to send messages');
    }
});


// Function to send email
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Evolve With Rahul" <${process.env.USER_GMAIL}>`, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body  
            html, // html body
        });
        console.log(info);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


function sendEmailToUser(formData) {
    const to = formData.email
    const subject = "Welcome to Evolve With Rahul ";
    const text = `
    Welcome to Evolve With Rahul!

    Dear ${formData.fullName},

    Thank you for registering with Evolve With Rahul.

    We are happy to have you in our yoga family.
    Our team will contact you soon regarding your selected plan.

    Stay Healthy, Stay Calm 

    Regards,
    Evolve With Rahul Team
`;
    const html = `
<div style="font-family: Arial, sans-serif; background:#f4f8f7; padding:30px;">
  
  <div style="max-width:600px; margin:auto; background:white; border-radius:10px; padding:30px;">
    
    <h1 style="color:#2c7a7b; text-align:center;">
       Evolve With Rahul
    </h1>

    <h2 style="color:#333;">
      Welcome ${formData.fullName}!
    </h2>

    <p style="font-size:16px; color:#555; line-height:1.6;">
      Thank you for registering with <b>Evolve With Rahul</b>.
      <br/><br/>
      We are very happy to have you in our yoga community.
    </p>

    <div style="background:#e6fffa; padding:15px; border-radius:8px; margin:20px 0;">
      <p style="margin:5px 0;"><b>Selected Plan:</b> ${formData.plan}</p>
      <p style="margin:5px 0;"><b>Email:</b> ${formData.email}</p>
    </div>

    <p style="font-size:16px; color:#555;">
      Our instructor will contact you soon with further details.
    </p>

    <hr style="margin:25px 0;"/>

    <p style="text-align:center; color:#2c7a7b; font-weight:bold;">
      Stay Healthy • Stay Positive • Stay Strong
    </p>

    <p style="text-align:center; font-size:14px; color:#777;">
      © 2026 Evolve With Rahul
    </p>

  </div>
</div>
`;

    sendEmail(to, subject, text, html)

}

function sendEmailToInstructor(formData) {
    const to = "yyadavrrahul@gmail.com"
    const subject = " New Yoga Registration";
    const text = `
        New Yoga Registration Received

        A new user has registered on Evolve With Rahul website.

        User Details:
          --------------------------------
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phoneNumber}
        Selected Plan: ${formData.plan}
        Message: ${formData.message}

        Please contact the user as soon as possible.

        Evolve With Rahul System
        `;
    const html = `
        <div style="font-family: Arial, sans-serif; background:#f4f8f7; padding:30px;">
  
        <div style="max-width:650px; margin:auto; background:white; border-radius:12px; padding:30px;">
    
        <h1 style="color:#2c7a7b; text-align:center;">
            Evolve With Rahul
        </h1>

        <h2 style="color:#333;">
            New Registration Alert 
        </h2>

        <p style="font-size:16px; color:#555;">
            A new user has registered on your yoga website.
        </p>

        <div style="background:#f0fffa; padding:20px; border-radius:10px; margin-top:20px;">
      
        <h3 style="margin-top:0; color:#2c7a7b;">User Details</h3>
      
        <p><b>Name:</b> ${formData.fullName}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Phone:</b> ${formData.phoneNumber}</p>
        <p><b>Selected Plan:</b> ${formData.plan}</p>
        <p><b>Message:</b> ${formData.message}</p>
      
      </div>

    <div style="margin-top:25px; padding:15px; background:#fff7ed; border-radius:8px;">
      <p style="margin:0; color:#9a3412;">
         Please contact the user soon to confirm session details.
      </p>
    </div>

    <hr style="margin:30px 0;"/>

    <p style="text-align:center; color:#777; font-size:14px;">
      This is an automated email from Evolve With Rahul Website
    </p>

  </div>
</div>
`;
    sendEmail(to, subject, text, html)

}

module.exports = { sendEmailToUser, sendEmailToInstructor };