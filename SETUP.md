# DocuServe - PHP Database Setup

## Prerequisites:
- XAMPP, WAMP, or LAMP installed
- PHP 7.4 or higher
- MySQL database

## Setup Instructions:

### 1. Start Apache & MySQL
- Open XAMPP/WAMP Control Panel
- Start Apache and MySQL services

### 2. Create Database
- Open phpMyAdmin (http://localhost/phpmyadmin)
- Click "Import" tab
- Select `database.sql` file
- Click "Go" to create database and table

### 3. Configure Database Connection
Edit `config.php` if needed:
```php
$host = 'localhost';
$dbname = 'docuserve_db';
$username = 'root';      // Change if different
$password = '';          // Add password if set
```

### 4. Move Files to Server
Copy all files to:
- XAMPP: `C:\xampp\htdocs\DocuServe\`
- WAMP: `C:\wamp64\www\DocuServe\`

### 5. Access Website
Open browser and go to:
```
http://localhost/DocuServe/order.html
```

## Files Created:
- `config.php` - Database connection
- `submit_order.php` - Form handler
- `database.sql` - Database schema
- `SETUP.md` - This file

## Database Table Structure:
```
orders
├── id (INT, AUTO_INCREMENT, PRIMARY KEY)
├── name (VARCHAR 255)
├── email (VARCHAR 255)
├── service (VARCHAR 100)
├── instructions (TEXT)
└── created_at (TIMESTAMP)
```

## How It Works:
1. User fills order form
2. JavaScript sends data to `submit_order.php` via AJAX
3. PHP saves data to MySQL database
4. User gets confirmation
5. WhatsApp & Email links open automatically
