const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/api/contact', (req, res) => {
  console.log("Contact Data Received:", req.body);
  res.json({ message: "Contact message received!" });
});

app.post('/api/service', (req, res) => {
  console.log("Service Request Received:", req.body);
  res.json({ message: "Service request placed successfully!" });
});

app.post('/api/expert', upload.single('expertFile'), (req, res) => {
  console.log("Expert Data:", req.body);
  console.log("File Info:", req.file);
  res.json({ message: "Application submitted with file!" });
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
