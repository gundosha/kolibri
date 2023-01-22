const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth:{
        user:'zamilov_2016@mail.ru', // 89037369474@bk.ru
        pass:'E5im7vkit2HptwRPrKmi' //C1Lpax00sDXmsZvBMx7h KOLIBRI   E5im7vkit2HptwRPrKmi ME
    }
}, 
{
    from: 'kolibri <zamilov_2016@mail.ru>',
})


transporter.verify((error, success) =>{
    error ? console.log(error) :
        console.log('sever is ready to take our messages: ', success)
})
const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('email sand: ', info)
    })
}

module.exports = mailer 