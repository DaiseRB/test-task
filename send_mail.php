<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
	
    $mail->CharSet = "UTF-8";
    
    $name = $_POST["name"];
	$phone = $_POST["phone"];
    $product = $_POST["product"];

	$body = $name . ' ' . $phone . ' ' . $product;
    $theme = "[Поступил новый заказ]";
	

    $mail->addAddress("daiserb88@gmail.com");  
    $mail->Subject = $theme;
    $mail->Body = $body;
    $mail->send();

?>
