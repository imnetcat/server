<?php

    $socket = stream_socket_server($_SERVER['SERVER_ADDR'] + ":1080", $errorNumber, $errorDescription);

    if (!$socket) {
        die("$errorDescription ($errorNumber)\n");
    }

    while ($connect = stream_socket_accept($socket, -1)) {
        fwrite($connect, "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nConnection: close\r\n\r\nHi! its work!\n\n");
        fclose($connect);
    }

    fclose($socket);
    ?>
