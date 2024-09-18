require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route to send email
app.post('/send', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Create the transporter with your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change to your email service provider if needed
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Email where you want to receive the form data
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new contact form submission. \n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log error for debugging
      return res.status(500).json({ message: 'Failed to send email', error });
    }
    console.log('Email sent:', info.response); // Log success for debugging
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
