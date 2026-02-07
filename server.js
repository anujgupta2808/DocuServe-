const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anujgupta26610812@gmail.com',
      pass: 'YOUR_16_CHARACTER_APP_PASSWORD'
    }
  });

  const mailOptions = {
    from: email,
    to: 'anujgupta26610812@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
