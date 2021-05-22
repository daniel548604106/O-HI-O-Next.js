import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_ACCOUNT,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

export const sendPasswordReset = async (userEmail, resetURL) => {
  const mailData = {
    from: process.env.EMAIL_ACCOUNT,
    to: userEmail,
    subject: "Taiwzoo - Password Reset",
    text: "testing",
    html: `<div>Please click on the following link for your password reset.
    <a style="background: 'blue';color: 'white'; padding: '5px 10px';border-radius: '10px' " href=${resetURL} target="_blank" >Reset Password</a> </div>`,
  };

  console.log("sending");
  try {
    await transporter.sendMail(mailData);
    console.log("sent");
  } catch (error) {
    console.log(error);
  }
};
