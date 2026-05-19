<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);
if (!is_array($payload)) {
    $payload = $_POST;
}

$name = trim($payload['name'] ?? '');
$phone = trim($payload['phone'] ?? '');
$age = trim($payload['age'] ?? '');
$goal = trim($payload['goal'] ?? '');

if ($name === '' || $phone === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Vui lòng nhập họ tên và số điện thoại.']);
    exit;
}

$line = [date('Y-m-d H:i:s'), $name, $phone, $age, $goal];
$file = dirname(__DIR__, 2) . '/leads.csv';
$handle = fopen($file, 'a');

if (!$handle) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Không thể lưu thông tin.']);
    exit;
}

fputcsv($handle, $line);
fclose($handle);

echo json_encode(['success' => true]);
