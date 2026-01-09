
// import nodemailer from 'nodemailer';

// // create reusable transporter object using the default SMTP transport
// /**
//  * for gmail, enable less secure from below linke
//  * https://myaccount.google.com/lesssecureapps 
//  */
// const initMail = async () => {
// const contactEmail = nodemailer.createTransport({
//   host:"smtp.gmail.com",
//   port: "587",
//   secure: false, 
//   auth: {
//     user: "no-reply@gymadmin.online",
//     pass: "UjXAP2A5yV&Y3yA=", 
//   },
// });
 
// // let transporter = nodemailer.createTransport({
// //     host: "smtp.ethereal.email",
// //     port: 587,
// //     secure: false, // true for 465, false for other ports
// //     auth: {
// //       user: testAccount.user, // generated ethereal user
// //       pass: testAccount.pass, // generated ethereal password
// //     },
// //   });

// contactEmail.verify((error) => { 
//   if (error) {
//     console.log(error); 
//   } else {
//     console.log(`Ready to send emails..`);
//   }
// });
// return contactEmail;
// }
// export default initMail;