<?php
// Database Configuration Template
// Copy this file to config.php and update with your database credentials

$host = 'localhost';
$dbname = 'docuserve_db';
$username = 'root';
$password = '';  // Add your database password here

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
