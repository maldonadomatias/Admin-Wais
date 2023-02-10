const nodemailer = require('nodemailer')
const { db, auth } = require('../firebase')
const { genPassword } = require('../util/functions')

const mainController = {
  index: (req, res) => {
    res.render('index')
  },
  thanks: (req, res) => {
    res.render('thanks')
  },
  mail: async (req, res) => {
    const { name, email, role } = req.body
    const password = genPassword()

    await db.collection('users').add({
      created: Date.now(),
      displayName: name,
      role: role,
      user: email,
    })

    try {
      await auth.createUser({
        email: email,
        password: password,
      })

      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'maldonadomatiasagustin@gmail.com', // generated ethereal user
          pass: 'ctccjntaiodadpzu', // generated ethereal password
        },
      })

      try {
        await transporter.sendMail({
          from: 'apolo@services.com', // sender address
          subject: 'Nuevo Usuario',
          to: email, // list of receivers
          text: `Hola, bienvenido a Apolo Oil Services. \n
          Estos son tus datos:\n
          -Mail: ${email}\n
          -Contraseña: ${password}\n`, // plain text body
        })
      } catch (e) {
        console.log(e, 'Error!')
      }
    } catch (e) {
      console.error(e)
    }
    res.redirect('/')
  },
  error: (req, res) => {
    res.render('error')
  },
}

module.exports = mainController
