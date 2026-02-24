import nodemailer from "nodemailer";

import 'dotenv/config';

export async function sendEmail(email, message) {
  const userEmail = process.env.userEmail;
  const userPassword = process.env.userPassword;
  const finalUserEmail = process.env.finalUserEmail;
  
  return new Promise(function (resolve, reject) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: finalUserEmail,
      subject: email,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        reject();
      }
      resolve();
    });
  });
}
