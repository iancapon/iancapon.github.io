<table>
    <th>---CATÁLOGO---</th>

<?php
$busqueda=$_GET['buscar'];
$vaciar=$_GET['vaciar'];
$conn=new mysqli('localhost','root','','pruebas');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
$sql='select id, objeto, precio from precios where objeto like "%'.$busqueda.'%";';
$respuesta=$conn->query($sql);
if ($respuesta->num_rows > 0){
    while($fila= $respuesta->fetch_assoc()){
        echo '<tr>';
        echo '<td>'.$fila['id'].'</td>';
        echo '<td>'.$fila['objeto'].'</td>';
        echo '<td>$'.$fila['precio'].'</td>';
        echo '</tr>';
        
    }
}
$conn->close();
echo '</table>';
echo '<button style="float:right;" onclick="vaciar('."'p1'".')">Vaciar</button>';
?>

