<?php
header('Content-Type: application/json');
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $service = $_POST['service'] ?? '';
    $instructions = $_POST['instructions'] ?? '';
    
    try {
        $stmt = $conn->prepare("INSERT INTO orders (name, email, service, instructions, created_at) VALUES (?, ?, ?, ?, NOW())");
        $stmt->execute([$name, $email, $service, $instructions]);
        
        echo json_encode(['success' => true, 'message' => 'Order submitted successfully!']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
