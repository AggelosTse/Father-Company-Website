import nodemailer from "nodemailer";



export async function sendEmail(email, message){
    return new Promise(function (resolve, reject) {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: 'private info',
            pass: 'private info',
          },
        });
    
        const mailOptions = {
          from: 'private info',
          to: 'private info',
          subject: email,
          text: message,
        };
    
        transporter.sendMail(mailOptions, function (error) {
          if (error) {
            reject(error);
          }
          resolve();
        });
      });
}