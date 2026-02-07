# Step-by-Step Setup Guide for DocuServe

## Step 1: Install XAMPP (if not installed)

1. Download XAMPP from: https://www.apachefriends.org/
2. Install it (default location: C:\xampp)
3. Open XAMPP Control Panel

## Step 2: Start Services

1. Open XAMPP Control Panel
2. Click "Start" button next to Apache
3. Click "Start" button next to MySQL
4. Both should show green "Running" status

## Step 3: Import Database in phpMyAdmin

### Method 1: Using phpMyAdmin Interface
1. Open browser and go to: http://localhost/phpmyadmin
2. Click "New" in left sidebar (or click "Databases" tab)
3. Enter database name: `docuserve_db`
4. Click "Create"
5. Click on `docuserve_db` in left sidebar
6. Click "Import" tab at the top
7. Click "Choose File" button
8. Navigate to: C:\Users\Anuj\OneDrive\Desktop\DocuServe\database.sql
9. Select the file and click "Open"
10. Scroll down and click "Go" button
11. You should see "Import has been successfully finished"

### Method 2: Using SQL Tab (Easier)
1. Open browser: http://localhost/phpmyadmin
2. Click "SQL" tab at the top
3. Open database.sql file in Notepad
4. Copy all the SQL code
5. Paste it in the SQL query box
6. Click "Go" button
7. Done!

## Step 4: Move Files to htdocs Folder

### Option A: Using File Explorer (Easiest)
1. Open File Explorer
2. Navigate to: C:\Users\Anuj\OneDrive\Desktop\DocuServe
3. Select ALL files in DocuServe folder (Ctrl+A)
4. Copy them (Ctrl+C)
5. Navigate to: C:\xampp\htdocs\
6. Create new folder named "DocuServe"
7. Open the DocuServe folder
8. Paste all files (Ctrl+V)

### Option B: Using Command Prompt
1. Press Win+R
2. Type: cmd
3. Press Enter
4. Copy and paste this command:

```cmd
xcopy "C:\Users\Anuj\OneDrive\Desktop\DocuServe" "C:\xampp\htdocs\DocuServe\" /E /I /Y
```

5. Press Enter
6. Done!

## Step 5: Test Your Website

1. Open browser
2. Go to: http://localhost/DocuServe/order.html
3. Fill the form and submit
4. Check if data is saved

## Step 6: Verify Database Entry

1. Go to: http://localhost/phpmyadmin
2. Click "docuserve_db" in left sidebar
3. Click "orders" table
4. Click "Browse" tab
5. You should see your submitted data

## Troubleshooting:

### If Apache won't start:
- Port 80 might be in use
- Close Skype or other programs using port 80
- Or change Apache port in XAMPP config

### If MySQL won't start:
- Port 3306 might be in use
- Stop other MySQL services
- Restart computer and try again

### If page shows "Connection failed":
- Check if MySQL is running in XAMPP
- Verify database name in config.php
- Check username/password in config.php

## Quick Command to Copy Files:

Open Command Prompt (Win+R, type cmd) and run:

```cmd
xcopy "C:\Users\Anuj\OneDrive\Desktop\DocuServe" "C:\xampp\htdocs\DocuServe\" /E /I /Y
```

This copies everything automatically!

## Your Website URLs:

- Homepage: http://localhost/DocuServe/index.html
- Order Page: http://localhost/DocuServe/order.html
- Contact: http://localhost/DocuServe/contact.html
- Pricing: http://localhost/DocuServe/pricing.html
- phpMyAdmin: http://localhost/phpmyadmin

## Done! 🎉

Your DocuServe website is now connected to the database!
