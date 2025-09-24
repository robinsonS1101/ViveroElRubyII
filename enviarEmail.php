<?php
    $destinatario='aguirrerobinson05@gmail.com';
    $nombre=    $_POS['nombre'];
    $email=     $_POS['email'];
    $asunto=  $_POS['ausunto'];
    $mensage=   $_POS['mensaje'];

    $header= 'Enviado desde la paguina JakySan';
    $mensajeCompleto= $mensage . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>Alert('Email enviado correctamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",10000)</script>";
?>