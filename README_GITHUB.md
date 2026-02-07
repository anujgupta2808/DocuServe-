# DocuServe - Smart Document Services

Professional document conversion and data analysis service platform.

## 🚀 Features

- PDF to Word conversion
- PDF to Excel conversion
- Excel data analysis
- Contact form with email integration
- Order management system
- MySQL database integration
- Responsive design
- WhatsApp & Email notifications

## 📋 Prerequisites

- XAMPP/WAMP/LAMP
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Modern web browser

## 🛠️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/DocuServe.git
cd DocuServe
```

### 2. Setup Database
- Start Apache & MySQL in XAMPP
- Open phpMyAdmin: http://localhost/phpmyadmin
- Import `database.sql` file

### 3. Configure Database
```bash
cp config.example.php config.php
```
Edit `config.php` with your database credentials.

### 4. Move to Server
Copy files to:
- XAMPP: `C:\xampp\htdocs\DocuServe\`
- WAMP: `C:\wamp64\www\DocuServe\`

### 5. Access Website
```
http://localhost/DocuServe/index.html
```

## 📁 File Structure

```
DocuServe/
├── index.html              # Homepage
├── order.html              # Order form
├── contact.html            # Contact page
├── pricing.html            # Pricing page
├── style.css               # Main stylesheet
├── config.example.php      # Database config template
├── submit_order.php        # Form handler
├── database.sql            # Database schema
├── form-handler.js         # Contact form JS
├── script.js               # Express server
├── server.js               # Nodemailer server
├── docuserve-logo.svg      # Logo
├── favicon.svg             # Favicon
└── README.md               # This file
```

## 🗄️ Database Schema

```sql
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    service VARCHAR(100) NOT NULL,
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Configuration

Update contact details in HTML files:
- Email: `anujgupta26610812@gmail.com`
- Phone: `+918779747746`
- WhatsApp: `918779747746`
- Instagram: `@DocuServeOfficial`

## 📱 Contact Integration

Forms automatically open:
- WhatsApp with pre-filled message
- Email client with formatted content
- Data saved to MySQL database

## 🎨 Customization

### Colors (in style.css)
```css
--primary: #14b8a6;    /* Teal */
--secondary: #6366f1;  /* Indigo */
--accent: #22d3ee;     /* Cyan */
```

### Logo
Replace `docuserve-logo.svg` with your logo.

## 🚀 Deployment

### Local Development
1. Use XAMPP/WAMP
2. Access via localhost

### Production
1. Upload files to web hosting
2. Import database.sql
3. Update config.php with production credentials
4. Update contact details

## 📄 License

All rights reserved © 2026 DocuServe

## 👤 Author

DocuServe Team

## 🤝 Contributing

Contributions welcome! Please open an issue first.

## 📞 Support

- Email: anujgupta26610812@gmail.com
- Phone: +91 8779747746
- Instagram: @DocuServeOfficial
