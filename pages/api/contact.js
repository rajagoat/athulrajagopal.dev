/* eslint-disable import/no-anonymous-default-export */
const nodemailer = require("nodemailer");

export default (req, res) => {
    const { name, email, text } = req.body;

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  
    const mailOption = {
      from: `${process.env.EMAIL}`,
      to: `${process.env.EMAIL}`,
      subject: `athulrajagopal.dev - Contact form submission from ${name}`,
      text: `
      ${name}'s email: ${email}

      ${name} wrote:
      \t${text}
      `,
    };

    transporter.sendMail(mailOption, (err) => {
        if (err) {
            res.send(400);
          } else {
            res.send(200);
          }
    });
};