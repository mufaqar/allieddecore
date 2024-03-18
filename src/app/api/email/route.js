let nodemailer = require('nodemailer')

export async function POST(request) {

     const body = await request.json();

     const EMAIL = "softsgens@gmail.com"
     const GMAIL_PASSWORD = "bczjxzfatgxsebrz"

     // step-1 
     const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
               user: EMAIL,
               pass: GMAIL_PASSWORD
          },
          secure: true,
     })

     // step-2
     const mailData = {
          from: EMAIL,
          to: `softsgens@gmail.com, ${body.email}`,
          subject: `Message From ${body.name}`,
          text: body.massage + " | Sent from: " + body.email,
          html: `
      <p><strong>Name: </strong> ${body.name}</p>
      <p><strong>Email: </strong> ${body.email}</p>
      <p><strong>Phone number: </strong> ${body.phone}</p>
      <p><strong>Services: </strong> ${body.services}</p>
      <p><strong>Message: </strong> ${body.massage}</p> `
     }

     // step-3
    
     transporter.sendMail(mailData, function (err, info) {
          if (err) {
               console.log(err)
               return new Response('Error', {err})
          }
          else {
               console.log(info)
               return new Response('Email sended!', {info})
          }
     })

     return new Response('Email sended!')
}
