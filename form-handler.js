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



document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.getElementById("contactForm");

  const name = document.getElementById("contactName").value;
  const number = document.getElementById("contactNumber")?.value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  // Recipient email
  const adminEmail = "anujgupta26610812@gmail.com";

  // Create Subject and Body (URL Encoded)
  const subject = encodeURIComponent(`New Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Phone: ${number}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  // Construct the mailto link
  const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  if (confirmMsg) {
    confirmMsg.style.display = "block"; // Shows the <p> tag
    confirmMsg.innerHTML = "✅ Message processed! Redirecting to Email...";
  }

    // 4. Clear the form data immediately
  form.reset();

  // Open email client
  window.location.href = mailtoLink;

  // ✅ Small professional alert
  setTimeout(() => {
    alert("✅ Message ready to send! Your email app has been opened.");
  }, 300);


});
