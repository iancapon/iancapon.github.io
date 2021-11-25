function chequear(){
var dato= document.getElementById('obj').value;
var condicion= /{1,10}$/;
var respuesta=true;

if (condicion.text(dato) != true){
    respuesta = false;
    alert('Está muy largo');
}
return respuesta;

}