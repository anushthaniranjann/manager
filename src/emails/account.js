const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'chaudharysaumya25@gmail.com',
        subject:'Welcome',
        text:`Welcome to the app,${name}.Hope you enjoy our app,`
    })
}

const sendCancelationEmail= (email,name)=>{
    sgMail.send({
        to:email,
        from:'chaudharysaumya25@gmail.com',
        subject:'Sorry for any inconvenience',
        text:`Goodbye,${name}.Hope to see you soon.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}