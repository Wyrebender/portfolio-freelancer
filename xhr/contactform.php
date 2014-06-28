<?php
include_once("analyticstracking.php");

header('content-type: text/plain; charset=utf-8');

if (isset($_POST["name"])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	//Strip whitespace (or other characters) from the beginning and end of a string
	$name = stripslashes($name);
	$email = stripslashes($email);
	$message = stripslashes($message);
	
	$header = "From: ". $name . " <". $email .">"; 

	$ip = $_SERVER['REMOTE_ADDR'];
	$httpref = $_SERVER['HTTP_REFERER'];
	$httpagent = $_SERVER['HTTP_USER_AGENT'];
	$today = date("F j, Y, g:i a");    

	$recipient = 'francohaley@gmail.com'; 
	$subject = ''.$name.' Sent A Message For You From Portfolio Site (francohaley.com).';
	$mailbody = '
Name: '.$name.'
From: '.$email.'
Message: '.$message.'

IP: '.$ip.'
Browser info: '.$httpagent.'
Referral: '.$httpref.'
Sent: '.$today.'
';
	$result = 'success';

	if (mail($recipient, $subject, $mailbody, $header)) {
		echo json_encode($result);
	}
}
?>
