const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service:"gmail",
      host: process.env.MAIL_HOST,
      port: 587, // TLS port for Gmail
      secure: false, // Use false for TLS (port 587)
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allows use of self-signed certificates
      },
    });

    let info = await transporter.sendMail({
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
      to: email, // receiver's email
      subject: title, // Subject line
      html: body, // html body
    });

    console.log("Message sent: %s", info.messageId); // Log the message ID
    console.log("Response: ", info.response); // Log full response for more insights

    return info;
  } catch (error) {
    console.log("Error occurred: ", error); // Detailed error log
    return error.message;
  }
};

module.exports = mailSender;