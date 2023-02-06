const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth:{
        user:'89037369474@bk.ru', // 89037369474@bk.ru
        pass:'50znzUvrYkCrMihac2bq' //C1Lpax00sDXmsZvBMx7h KOLIBRI   E5im7vkit2HptwRPrKmi ME
    }
}, 
{
    from: 'delta-agency <89037369474@bk.ru>',
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