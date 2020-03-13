<!DOCTYPE html>
<html>
<head>
<title>Millennium Informática — Contato</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "https://millenniumservicos.com.br/";
    };
</script>
</head>
<body>

<?php if (!empty($_POST['txtNome']) && !empty($_POST['txtEmail']) && !empty($_POST['txtMensagem'])): 
			//Carrega as classes do PHPMailer
 			include("../../root/phpmailer/class.phpmailer.php"); 
 			include("../../root/phpmailer/class.smtp.php"); 
			
			//envia o e-mail para o visitante do site
			$mailDestino = $_POST['txtEmail']; 
			$nome = $_POST['txtNome'];	
			$mensagem = "Obrigado pelo seu contato, responderemos em breve.";
			$assunto = "Obrigado pelo seu contato!";
			include("../../root/envio.php");
			
			//envia o e-mail para o administrador do site
			$mailDestino = 'gorpaapps@gmail.com'; 
			$nome = 'GorpaApps';	
			$assunto = "Mensagem recebida do site";
			$mensagem = "Recebemos uma mensagem no site <br/>
						<strong>Nome:</strong> $_POST[txtNome]<br/>
						<strong>e-mail:</strong> $_POST[txtEmail]<br/>
						<strong>mensagem:</strong> $_POST[txtMensagem]";
			include("../../root/envio.php");
var_dump($_POST);
?>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Millennium Informática — Contato</h4>
  <p>O email de contato foi enviado com sucesso, por favor aguarde o recebimento do email de confirmação em sua caixa de entrada.</p>
  <hr>
  <p class="mb-0">Feche esta aba ou clique em voltar para ser redirecionado novamente para o site.</p>
  <hr>
  <button id="myButton" type="button" class="btn btn-primary">Voltar</button>
</div>

<?php else: ?>

<div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">Millennium Informática — Contato</h4>
  <p>Desculpe, mas não encontramos todos os dados necessários para enviar o email corretamente.</p>
  <hr>
  <p class="mb-0">Feche esta aba ou clique em voltar para ser redirecionado, e tente novamente.</p>
  <hr>
  <button id="myButton" type="button" class="btn btn-primary">Voltar</button>
</div>

<?php endif ?>
</body>
</html>
