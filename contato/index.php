<!DOCTYPE html>
<html>
<head>
<title>Contato</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
	<?php 

			//Carrega as classes do PHPMailer
 			//include("../root/phpmailer/class.phpmailer.php"); 
 			//include("../root/phpmailer/class.smtp.php"); 
			
			//envia o e-mail para o visitante do site
			//$mailDestino = $_POST['txtEmail']; 
			//$nome = $_POST['txtNome'];	
			//$mensagem = "Obrigado pelo seu contato, responderemos em breve.";
			//$assunto = "Obrigado pelo seu contato!";
			//include("../root/envio.php");
			
			//envia o e-mail para o administrador do site
			//$mailDestino = 'gorpaapps@gmail.com'; 
			//$nome = 'GorpaApps';	
			//$assunto = "Mensagem recebida do site";
			//$mensagem = "Recebemos uma mensagem no site <br/>
			//			<strong>Nome:</strong> $_POST[txtNome]<br/>
			//			<strong>e-mail:</strong> $_POST[txtEmail]<br/>
			//			<strong>mensagem:</strong> $_POST[txtMensagem]";
			//include("../root/envio.php");
var_dump($_POST);
	?>
</body>
</html>
