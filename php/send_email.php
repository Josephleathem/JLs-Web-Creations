<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    $to = "leathemjay@gmail.com"; // Change this to your email
    $subject = "New Contact Form Submission from JL's Web Creations";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "You have received a new message from JL's Web Creations:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
                alert('Thank you! Your message has been sent.');
                window.location.href = '../index.html';
              </script>";
    } else {
        echo "<script>
                alert('Oops! Something went wrong. Please try again.');
                window.history.back();
              </script>";
    }
}
?>
