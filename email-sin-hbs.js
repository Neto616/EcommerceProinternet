const express = require("express");
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const app = express();

const transporter = nodemailer.createTransport({
    service: "Gmail",  
    port: 3000, secure: true, auth: {
        user: "netoilluminati258@gmail.com", pass: "gnavdkfqtkaovggq"
    },
});

transporter.verify((error, success) => {
    if (error) console.error(error);
    console.log("estamos ready");
});

transporter.use('compile', hbs({
    viewEngine: {
        extname: '.hbs',
        layoutsDir: 'templates/',
        defaultLayout: false,
        partialsDir: 'templates/',
    }, viewPath: 'templates/', extName: '.hbs'
}));

app.post('/send-confirmation-email', async (req, res) => {
    const products = [{
        productId: 1, productName: 'Cool Bike', price: 1050
    }, {
        productId: 2, productName: 'Great Lock', price: 35
    }]
    try {
        transporter.sendMail({
            from: 'netoilluminati258@gmail.com ',
            to: 'alexrdz1221@gmail.com',
            subject: 'Product Confirmation',
            template: 'product_confirmation_template',
            context: {
                name: 'Anonymous Coder', products: products,
            }
        }, () => {
            
            res.console.log('No se envio')
        })
    } catch {
        console.log('Si se envio')
        return res.status(400).send('Email not sent')
       
    }
})

app.post('/send-email', async (req, res) => {
    try {
        transporter.sendMail({
            from: 'Anonymous Coder netoilluminati258@gmail.com',
            to: 'netoilluminati258@gmail.com',
            subject: 'Your first nodemail',
            template: 'email_template',
            context: {
                name: 'Anonymous Coder'
            }
        }, () => {
            res.status(200).send('Email sent')
        })
    } catch {
        return res.status(400).send('Email not sent')
    }
})


