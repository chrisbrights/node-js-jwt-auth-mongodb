const nodemailer = require("nodemailer");

// const config = require("../config/auth.config");

// const user = config.user;
// const pass = config.pass;

// const transport = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//         user: user,
//         pass: pass,
//     },
// });

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'brook.cremin@ethereal.email',
        pass: 'k6wQWeerbvXD1e3aPh'
    }
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    transporter.sendMail({
        from: 'brook.cremin@ethereal.email',
        to: email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href='http://localhost:8081/confirm/${confirmationCode}'>Click Here</a>
        `
    }).catch(err => console.log(err));
};