<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

#require '../vendor/autoload.php';

$errors = [];
$errorMessage = ' ';
$successMessage = ' ';
echo 'sending ...';
if (!empty($_POST['email'])) {
    echo 'not empty';
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $receiverEmail = "bekololek@gmail.com";
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $emailSubject = 'Budamentál új email!';

    // Create a new PHPMailer instance
    $mail = new PHPMailer(exceptions: true);
    try {
        // Configure the PHPMailer instance
        $mail->isSMTP();
        $mail->Host = 'live.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Username = 'api';
        $mail->Password = 'b765d07d984d317b5090353af81543b7';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set the sender, recipient, subject, and body of the message 
        $mail->setFrom($email);
        $mail->addAddress($receiverEmail);
        $mail->Subject = $emailSubject;
        $mail->isHTML(isHtml: true);
        $mail->Body = "<p>Név: {$name}</p><br><p>Telefon: {$phone}</p><br><p>Email: {$email}</p><br><p>Miben vár seítséget:<br>{$message}</p>";

        // Send the message
        $mail->send();
        echo "sent";
        $successMessage = "<p style='color: green; '>Thank you for contacting us :)</p>";
    } catch (Exception $e) {
        $errorMessage = "<p style='color: red; '>Oops, something went wrong. Please try again later</p>";
        echo $errorMessage;
    }
}
echo 'it was empty';


?>