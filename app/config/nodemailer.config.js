// const nodemailer = require("nodemailer");

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

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'brook.cremin@ethereal.email',
//         pass: 'k6wQWeerbvXD1e3aPh'
//     }
// });

// module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
//     console.log("Check");
//     transporter.sendMail({
//         from: 'brook.cremin@ethereal.email',
//         to: email,
//         subject: "Please confirm your account",
//         html: `<h1>Email Confirmation</h1>
//         <h2>Hello ${name}</h2>
//         <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
//         <a href='http://localhost:8081/confirm/${confirmationCode}'>Click Here</a>
//         `
//     }).catch(err => console.log(err));
// };

const { MailtrapClient } = require("mailtrap");

// For this example to work, you need to set up a sending domain,
// and obtain a token that is authorized to send from the domain
const TOKEN = "c8e5ae89942792120d2262193b3f7c85";
const SENDER_EMAIL = "softtalents1986@outlook.com";

const client = new MailtrapClient({ token: TOKEN });
const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    client
        .send({
            from: sender,
            to: [{ email: email }],
            subject: "Please confirm your account",
            html: `<h1>Email Confirmation</h1>
                <h2>Hello ${name}</h2>
                <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                <a href='http://localhost:8081/confirm/${confirmationCode}'>Click Here</a>
                `
        })
        .then(console.log, console.error);
};



