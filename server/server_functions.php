<?

function create(){
  if(!$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP)){
    return "Error: " . socket_strerror(socket_last_error());
  }else{
    return "Success";
  }
}

function bind($socket, $address, $port){
  if(!socket_bind($socket, $address, $port)){
    return "Error: " . socket_strerror(socket_last_error())."<br />\r\n";
  }else{
    return "Success";
  }
}
?>
