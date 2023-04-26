<?php
$connection = new mysqli("localhost","Admin","admin","BenditaBurguer");

if($connection){
    echo"Conexion exitosa";
}else{
    echo"Conexion fallida";
}
?>