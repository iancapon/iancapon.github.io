function insertar(id,busqID){
    var xhttp= new XMLHttpRequest();
    var busqueda= document.getElementById(busqID).value;

    xhttp.onreadystatechange= function(){
        if (this.readyState==4 && this.status==200){
            document.getElementById(id).innerHTML=this.responseText;
        }
    }
    
    xhttp.open('GET','mensaje.php?buscar='+busqueda);
    xhttp.send();
}

function vaciar(id){
    document.getElementById(id).innerHTML='';
}
function add(input, output){
    var respuesta= document.createElement('li');
    respuesta.innerHTML='<li>'+document.getElementById(input).value+'</li>';
    var retorno=document.getElementById(output);
    retorno.appendChild(respuesta);
    //document.getElementById(output).innerHTML+='<li>'+document.getElementById(input).value+'</li>';
    document.getElementById('v2').innerHTML='<button style="float:right;" onclick="vaciar('+"'p2'"+')">Vaciar</button>';
}
    
