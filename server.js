const nodemailer = require('nodemailer');

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anujgupta26610812@gmail.com',
      pass: 'YOUR_16_CHARACTER_APP_PASSWORD' // NOT your regular password
    }
  });

  const mailOptions = {
    from: email, // The user's email
    to: 'anujgupta26610812@gmail.com', // Your email
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
