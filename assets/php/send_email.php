<?php
$to = 'hadom35752@byorby.com';
$subject = 'Hello from PHP';
$message = 'This is a test email sent using PHP!';
$headers = 'From: your-email@example.com' . "\r\n" .
           'Reply-To: your-email@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Error occurred while sending email.';
}
?>
