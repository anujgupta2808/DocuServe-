const express = require('express');
const cors = require('cors');
const multer = require('multer'); // For Expert form files
const app = express();

// 1. Enable CORS so frontend can talk to backend
app.use(cors()); 

// 2. Parse JSON bodies (Contact and Service forms)
app.use(express.json());

// 3. Configure Multer for Expert form file storage
const upload = multer({ dest: 'uploads/' });

// API Routes
app.post('/api/contact', (req, res) => {
  console.log("Contact Data Received:", req.body);
  res.json({ message: "Contact message received!" });
});

app.post('/api/service', (req, res) => {
  console.log("Service Request Received:", req.body);
  res.json({ message: "Service request placed successfully!" });
});

// Expert route handles files specifically
app.post('/api/expert', upload.single('expertFile'), (req, res) => {
  console.log("Expert Data:", req.body);
  console.log("File Info:", req.file);
  res.json({ message: "Application submitted with file!" });
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
