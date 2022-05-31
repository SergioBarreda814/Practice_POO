//USO DE CICLO WHILE / DO WHILE
// Estudiante: Barreda Martinez Sergio Emmanuel || 2°A

//Programa que lea precio de articulo y cantidad y pregunte (s/n) si hay mas articulos y leer los nuevos valores hasta que el usuario diga que no ('n').
   let total,precio,articulo,pago,cambio;
  total = 0;
  do{
    precio=parseInt(prompt('Precio del artículo'));
    total+=precio;
    articulo=prompt("Hay más artículos (s/n)");
  } while(articulo == "s");
  
//Mostrar el total y preguntar con cuanto paga, decir si hay cambio, esta exacto o le falta.
  console.log( "Total a pagar es: $" + total);
  pago=parseInt(prompt("Con cuanto va pagar:"));
  cambio=total-pago;
  if (cambio>0)
    console.log("Te falta: $" + cambio);
  
  if (cambio<0)
    console.log ("Tu cambio es: $" + cambio*-1);
  
  if (cambio == 0)
    console.log("Es exacto");
  
//MODIFICACION: modificar para que pregunte con cuanto paga hasta que ponga una cantidad suficiente para pagar.
do{
  pago=parseInt(prompt("Con cuanto va pagar:"));
  } while(pago<total);
   cambio= total - pago;
  
  if (cambio<0)
    console.log ("Tu cambio es: $" + cambio*-1);
  if (cambio == 0)
    console.log("Es exacto");
 