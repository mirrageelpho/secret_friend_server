const nodemailer = require('nodemailer');

require('dotenv/config');

const hbs = require('nodemailer-express-handlebars');

const  transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
});

const handlebarOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'src/views',
    layoutsDir: 'src/views/layouts',
    defaultLayout: 'main.hbs',
  },
  viewPath: 'src/views',
  extName: '.hbs',
};

transport.use('compile', hbs(handlebarOptions));

module.exports = transport;