function mostrarfecha(fecha) {
    /*CAMBIO DE FECHA*/
    
    var div = document.getElementById('fecha');
    console.log(div); /*Esto muestra en la consola el resultado de div*/
    var meses = new Array ("Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    
    var date = new Date();
    var mostrar = meses[date.getMonth()] + " " + date.getFullYear();
    
    var contenido = "<h1>" + mostrar + "</h1>";
    div.innerHTML = contenido;
    
}
mostrarfecha();

/*Mostrar el ingreso total en pantalla*/
var ingreso_total = document.getElementById('black');
var contador_ingreso = 0;
ingreso_total.innerHTML = "<p>Ingresos:           " + contador_ingreso + "          </p>"

/*Mostrar el egreso total en pantalla*/
var egreso_total = document.getElementById('white');
var contador_egreso = 0;
egreso_total.innerHTML = "<p>Egresos:           " + contador_egreso + "          </p>"

function opcion(selected){
    var form = document.getElementById("formgroup");
    var selected = form.options[form.selectedIndex].text;  
    return selected;
}

var tabingreso = document.getElementById('contenedor_ingreso');
var tabegreso = document.getElementById('contenedor_egreso');
var vingreso = [];
var vegreso = [];

function botonagregar() {
    
   if( opcion() == "Ingreso"){/*Si la opcion seleccionada es ingreso*/
        tabingreso.innerHTML="";/*Limpia el tab para que no se dupliquen cada vez que se oprime el boton*/
        let descrip = document.getElementById('descripcion').value; /*Se obrtiene el texto de descripción*/
        let monto = document.getElementById('monto').value; /*Se obtiene el monto*/
        let suma = (parseFloat(contador_ingreso) + parseFloat(monto)); /*Suma el contador de ingreso con el monto agregado*/
        contador_ingreso = suma; /*El valor de suma es el nuevo valor del contador ingreso*/
        ingreso_total.innerHTML = "<p>Ingresos:   + " + "$" + contador_ingreso + "</p>"; /*Se escribe en la pagina el contador*/
       
       
       /*Creacion de cadana HTML a utilizar y guardandola en Array*/
       let contenidohtml = "<li class='list-group-item'><pre>" + descrip +"        " + "$"+ monto +  "</pre></li>";
       vingreso.push(contenidohtml);
       console.log(vingreso);
       
       /*Escribe cada dato del array*/
       for(let i=0; i < vingreso.length; i++){
           tabingreso.innerHTML = vingreso.join("");
       };
  
       }
    
    if( opcion()== "Egreso"){/*Si la opcion seleccionada es egreso*/
        tabegreso.innerHTML="";
       let descrip = document.getElementById('descripcion').value; /*Se obrtiene el texto de descripción*/
        let monto = document.getElementById('monto').value; /*Se obtiene el monto*/
        let suma = (parseFloat(contador_egreso) + parseFloat(monto)); /*Suma el contador de egreso con el monto agregado*/
        contador_egreso = suma; /*El valor de suma es el nuevo valor del contador egreso*/
       egreso_total.innerHTML = "<p>Egresos:   - " + "$"+ contador_egreso + "</p>"; /*Se escribe en la pagina el contador*/
        
        /*Porcentaje de gasto en lista egreso*/
        let detalleegreso = ((parseFloat(monto) * 100)/contador_ingreso).toFixed(2);
        
       /*Creacion de cadana HTML a utilizar y guardandola en Array*/
       let contenidohtml = "<li class='list-group-item'><pre>" + descrip +"      " + "$"+ monto + "    <button>" + detalleegreso + "%</button></p></pre></li>";
       vegreso.push(contenidohtml);
       console.log(vegreso);
       
       /*Escribe cada dato del array*/
       for(let i=0; i < vegreso.length; i++){
           tabegreso.innerHTML = vegreso.join("");/*.Join("") para que no imprima la coma(,) del vector*/
       };
            }
    /*Resta de valores totales*/
    var diferencia = document.getElementById('diferencia');
    var dif = (parseFloat(contador_ingreso) - parseFloat(contador_egreso));
    diferencia.innerHTML = "\t\t<h1 id='dif'>" +"$" +dif + "</h1>"
    
    
    /*Promedio de gastos*/
    var porcentaje_gastos = ((parseFloat(contador_egreso) * 100 ) /parseFloat(contador_ingreso)).toFixed(2);
    var prom = document.getElementById('porcentaje');
    prom.innerHTML = "<p>" + porcentaje_gastos + " %</p>"
}



var botontab = document.querySelectorAll(".tabcontainer .btn-group button");
var conttab = document.querySelectorAll(".tabcontainer .tablist");

function show(panelIndex,color) {
    botontab.forEach(function(Node){
        Node.style.backgroundColor="";
        Node.style.color="";
    });
    botontab[panelIndex].style.backgroundColor=color;
    botontab[panelIndex].style.color="#004c51"
    conttab.forEach(function(Node){
        Node.style.display="none";
    });
    conttab[panelIndex].style.display="block";
    conttab[panelIndex].style.backgroundColor=color;
}    
show(0,"");


function validacion() {
  if (document.getElementById('descripcion').value == "") {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo descripción debe tener texto');
    return false;
  }
  else if (document.getElementById('monto').value == "") {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo monto debe tener un valor ');
    return false;
  }
  
  /*Si pasa todo se ejecuta la función botonagregar()*/
  botonagregar();
}

function limpiar(){
    document.getElementById('descripcion').value= "";
    document.getElementById('monto').value= "";
}
       




